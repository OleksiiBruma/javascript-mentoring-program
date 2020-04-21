import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { ICoursesState } from "./courses.state";
import { CoursesService } from "src/core/courses.service";
import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
  deleteCourse,
  deleteCourseSuccess,
  setCurrentCourse,
  setCurrentCourseSuccess,
  setCurrentCourseFailure,
  setPageType,
  saveCourse,
  updateCourse,
  saveNewCourse,
  saveNewCourseFailure,
  saveNewCourseSuccess,
  resetError
} from "./courses.actions";
import { switchMap, catchError, withLatestFrom, tap } from "rxjs/operators";
import { of } from "rxjs";
import { selectCurrentCourseId } from "src/app/store/reducers";
import { selectPageType, selectCurrentCourse } from "./courses.selectors";
import { Router } from "@angular/router";

@Injectable()
export class CoursesEffects {
  fetchCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      tap(() => resetError),
      switchMap(() => this.coursesService.getCourses()),
      switchMap(courses => of(loadCoursesSuccess({ courses: courses }))),
      catchError(error => of(loadCoursesFailure({ error: error })))
    )
  );
  removeCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      tap(() => resetError),
      switchMap(({ id }) =>
        this.coursesService
          .deleteCourse(id)
          .pipe(switchMap(() => of(deleteCourseSuccess({ id: id }))))
      ),
      catchError(error => of(loadCoursesFailure({ error: error })))
    )
  );
  setCurrentCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentCourse),
      tap(() => resetError),
      withLatestFrom(this.store.pipe(select(selectCurrentCourseId))),
      switchMap(([action, id]) => {
        if (id) {
          return this.coursesService.getCourseById(id).pipe(
            switchMap(selectedCourse => [
              setCurrentCourseSuccess({ course: selectedCourse }),
              setPageType({ pageType: "EDIT" })
            ]),
            catchError(error => of(setCurrentCourseFailure({ error: error })))
          );
        }
        return [
          setPageType({ pageType: "NEW" }),
          setCurrentCourseSuccess({ course: null })
        ];
      })
    )
  );
  saveNewCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveNewCourse),
      tap(() => resetError),
      switchMap(({ course }) => this.coursesService.createCourse(course)),
      switchMap(course => of(saveNewCourseSuccess({ course: course }))),
      tap(() => this.router.navigate(["/courses"])),
      catchError(error => of(saveNewCourseFailure({ error: error })))
    )
  );
  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourse),
      tap(() => resetError),
      withLatestFrom(this.store.pipe(select(selectCurrentCourse))),
      switchMap(([{ course }, currentCourse]) =>
        this.coursesService.editCourse(course, currentCourse.id)
      ),
      switchMap(course => of(saveNewCourseSuccess({ course: course }))),
      tap(() => this.router.navigate(["/courses"])),
      catchError(error => of(saveNewCourseFailure({ error: error })))
    )
  );
  saveCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveCourse),
      tap(() => resetError),
      withLatestFrom(this.store.pipe(select(selectPageType))),
      switchMap(([{ course }, pageType]) => {
        if (pageType === "NEW") {
          return of(saveNewCourse({ course: course }));
        } else if (pageType === "EDIT") {
          return of(updateCourse({ course: course }));
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ICoursesState>,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
