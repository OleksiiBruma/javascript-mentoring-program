import { Injectable } from "@angular/core";
import { CoursesApiService } from "./courses-api.service";
import { map, catchError } from "rxjs/operators";
import { Course } from "./course.model";
import { throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  constructor(private courseApiService: CoursesApiService) {}
  getCourses() {
    return this.courseApiService.fetchCourses();
  }
  filterCourses(query: string) {
    return this.courseApiService
      .fetchCourses()
      .pipe(
        map(courses => courses.filter(course => course.name.includes(query)))
      );
  }
  createCourse(newCourse: Course) {
    return this.courseApiService.createCourses(newCourse);
  }
  getAuthors() {
    return this.courseApiService.fetchAuthors();
  }
  deleteCourse(id: string) {
    return this.courseApiService.deleteCourse(id);
  }
  editCourse(course: Course, id: string) {
    return this.courseApiService.editCourse(course, id);
  }
  getCourseById(id: string) {
    return this.courseApiService.getCourseById(id);
  }
}
