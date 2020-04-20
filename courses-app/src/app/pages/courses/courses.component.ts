import { Component, OnInit, Input } from "@angular/core";
import { CoursesService } from "src/core/courses.service";
import { Course } from "src/core/course.model";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.sass"]
})
export class CoursesComponent implements OnInit {
  courses: any;
  loading: boolean;
  courseTitle: string;
  constructor(private coursesService: CoursesService) {
    this.coursesService = coursesService;
    this.courses = [];
    this.loading = true;
  }
  onSearch(query: string) {
    this.loading = true;
    this.coursesService.filterCourses(query).subscribe(courses => {
      this.courses = courses;
      this.loading = false;
    });
  }
  deleteCourse(id: string) {
    this.loading = true;
    this.coursesService.deleteCourse(id).subscribe(response => {
      this.loadCourses();
    });
  }
  loadCourses() {
    this.loading = true;
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.loadCourses();
  }
}
