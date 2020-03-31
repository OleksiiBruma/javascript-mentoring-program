import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.sass"]
})
export class CourseCardComponent {
  @Input() course;
  buttonText = "Delete course";
}
