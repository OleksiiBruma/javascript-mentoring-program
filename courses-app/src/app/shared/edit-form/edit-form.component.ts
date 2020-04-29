import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ICourse } from "src/app/models/course.model";
import { CoursesService } from "src/core/courses.service";
import { selectCurrentCourse } from "src/app/pages/courses/+state/courses.selectors";
import { select, Store } from "@ngrx/store";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.sass"]
})
export class EditFormComponent {
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.pipe(select(selectCurrentCourse)).subscribe(currentCourse => {
      if (currentCourse) {
        this.editCourseForm.patchValue({
          ...currentCourse,
          date: new Date(currentCourse.date)
        });
      }
    });
  }
  @Input() allAuthors;
  @Input() pageType;
  @Output() formUpdate = new EventEmitter<ICourse>();

  editCourseForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required),
    date: new FormControl(new Date(), Validators.required),
    authors: new FormControl([], Validators.required)
  });
  onSubmit() {
    this.formUpdate.emit(this.editCourseForm.value);
  }

  get name() {
    return this.editCourseForm.get("name");
  }
  get description() {
    return this.editCourseForm.get("description");
  }
  get duration() {
    return this.editCourseForm.get("duration");
  }
  get date() {
    return this.editCourseForm.get("date");
  }
  get authors() {
    return this.editCourseForm.get("authors");
  }
}
