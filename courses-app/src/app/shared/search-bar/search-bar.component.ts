import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { CoursesService } from "src/core/courses.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.sass"]
})
export class SearchBarComponent {
  query: string;
  @Output() search = new EventEmitter<any>();
  constructor() {}
  onFormSubmit(value: string) {
    this.search.emit(value);
  }
}
