import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.sass"]
})
export class EditFormComponent implements OnInit {
  @Input() courseToEdit: any;
  ngOnInit() {
    this.editCourseForm.patchValue({
      ...this.courseToEdit,
      date: new Date(this.courseToEdit.date)
    });
  }
  allAuthors = [
    "author1",
    "author2",
    "author3",
    "author4",
    "author5",
    "author6"
  ];
  selectedAuthors = [];

  editCourseForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    duration: new FormControl("", Validators.required),
    date: new FormControl(new Date(), Validators.required),
    authors: new FormControl([], Validators.required)
  });
  onSubmit() {
    alert(JSON.stringify(this.editCourseForm.value, null, 2));
  }

  get title() {
    return this.editCourseForm.get("title");
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
