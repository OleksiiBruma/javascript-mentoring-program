import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ICourse } from "src/app/models/course.model";
@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.sass"]
})
export class CourseCardComponent {
  @Input() course: ICourse;
  @Output() delete = new EventEmitter();
  buttonText = "Delete course";
  deleteCourse(id: string) {
    this.delete.emit(id);
  }
}
