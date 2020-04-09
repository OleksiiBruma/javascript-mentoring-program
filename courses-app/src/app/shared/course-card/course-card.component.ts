import { Component, OnInit, Input } from "@angular/core";
interface courseCard {
  title: string;
  duration: number;
  date: string;
  description: string;
}
@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.sass"]
})
export class CourseCardComponent {
  @Input() course: courseCard;
  buttonText = "Delete course";
}
