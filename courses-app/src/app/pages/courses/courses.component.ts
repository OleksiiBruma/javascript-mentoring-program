import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.sass"]
})
export class CoursesComponent implements OnInit {
  @Input() courses: [];

  constructor() {}

  ngOnInit(): void {}
}
