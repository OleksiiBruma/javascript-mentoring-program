import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.sass"]
})
export class CourseListComponent {
  @Input() courses$;
  @Output() delete = new EventEmitter();

  onDeleteCourse(id: string) {
    this.delete.emit(id);
  }
}
