import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "src/core/course.model";
@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.sass"]
})
export class CourseCardComponent {
  @Input() course: Course;
  @Output() delete = new EventEmitter();
  buttonText = "Delete course";
  deleteCourse(id: string) {
    this.delete.emit(id);
  }
}
