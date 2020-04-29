import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  loadCourses,
  deleteCourse,
  resetError
} from "./+state/courses.actions";
import { ICoursesState } from "./+state/courses.state";
import { selectVisibleCourses } from "./+state/courses.selectors";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.sass"]
})
export class CoursesComponent implements OnInit {
  courseTitle: string;
  constructor(private store: Store<ICoursesState>) {}
  onDeleteCourse(id: string) {
    this.store.dispatch(deleteCourse({ id: id }));
  }

  courses$ = this.store.pipe(select(selectVisibleCourses));

  ngOnInit() {
    this.store.dispatch(loadCourses());
    this.store.dispatch(resetError());
  }
}
