import { Component, Input } from "@angular/core";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.sass"]
})
export class CourseListComponent {
  @Input() courses: [];
}
