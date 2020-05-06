import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { confirm } from "tns-core-modules/ui/dialogs";
import { CoursesService, DataItem } from "../../shared/courses.service";

@Component({
  selector: "EditCourse",
  templateUrl: "./edit-course.component.html",
})
export class EditCourseComponent implements OnInit {
  course: DataItem;
  titleBar: string;
  isEditCourseState: boolean;

  constructor(
    private _data: CoursesService,
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const routeId = this._route.snapshot.params.id
      ? this._route.snapshot.params.id
      : "new";
    if (routeId !== "new") {
      this.isEditCourseState = true;
      this.course = this._data.getItem(routeId);
      this.titleBar = this.course.title;
      this.editCourseForm.patchValue({
        title: this.course.title,
        duration: this.course.duration,
        pictureURL: this.course.pictureURL,
        description: this.course.description,
        date: this.course.date,
      });

      return;
    }
    this.titleBar = "new";
  }

  onBackTap(): void {
    this._routerExtensions.back();
  }

  editCourseForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    duration: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    date: new FormControl("", [
      Validators.required,
      Validators.pattern(
        /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/
      ),
    ]),
    pictureURL: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(https?):\/\/[^\s$.?#].[^\s]*$/),
    ]),
  });

  onSubmit() {
    if (this.isEditCourseState) {
      this._data.updateItem(this.course.id, this.editCourseForm.value);
      this._routerExtensions.back();
      return;
    }
    this._data.addItem(this.editCourseForm.value);
    this._routerExtensions.back();
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
  get pictureURL() {
    return this.editCourseForm.get("pictureURL");
  }

  onDelete() {
    const options = {
      title: "Course deleting is about to start",
      message: "Are you sure you want to delete this course?",
      okButtonText: "Yes",
      cancelButtonText: "No",
      neutralButtonText: "Cancel",
    };

    confirm(options).then((result: boolean) => {
      if (result) {
        this._data.deleteItem(this.course.id);
        this._routerExtensions.back();
      }
    });
  }
}
