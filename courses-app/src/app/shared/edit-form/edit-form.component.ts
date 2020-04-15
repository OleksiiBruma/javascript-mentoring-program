import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Course } from "src/core/course.model";
import { CoursesService } from "src/core/courses.service";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.sass"]
})
export class EditFormComponent {
  ngOnInit() {
    if (this.currentCourse)
      this.editCourseForm.patchValue({
        ...this.currentCourse,
        date: new Date(this.currentCourse.date)
      });
  }
  @Input() currentCourse;
  @Input() allAuthors;
  @Input() pageType;
  @Output() formUpdate = new EventEmitter<Course>();

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
