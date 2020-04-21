import { Component } from "@angular/core";
import { CoursesService } from "src/core/courses.service";
import { ICourse } from "src/app/models/course.model";
import { Store } from "@ngrx/store";
import { ICoursesState } from "../courses/+state/courses.state";
import { selectCurrentCourse } from "../courses/+state/courses.selectors";
import { Observable } from "rxjs";
import {
  setCurrentCourse,
  setPageType,
  saveCourse,
  resetError
} from "../courses/+state/courses.actions";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.sass"]
})
export class EditCourseComponent {
  allAuthors: [];
  error: string;

  constructor(
    private coursesService: CoursesService,
    private store: Store<ICoursesState>
  ) {}
  onSubmit(course: ICourse) {
    this.store.dispatch(saveCourse({ course: course }));
  }

  ngOnInit() {
    this.store.dispatch(resetError());
    this.store.dispatch(setCurrentCourse());
    this.coursesService
      .getAuthors()
      .subscribe(authors => (this.allAuthors = authors));
  }
  ngOnDestroy() {
    this.store.dispatch(setPageType({ pageType: null }));
  }
}
