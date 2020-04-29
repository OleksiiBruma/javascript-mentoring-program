import { Injectable } from "@angular/core";
import { CoursesApiService } from "./courses-api.service";
import { map } from "rxjs/operators";
import { ICourse } from "../app/models/course.model";

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
  createCourse(newCourse: ICourse) {
    return this.courseApiService.createCourses(newCourse);
  }
  getAuthors() {
    return this.courseApiService.fetchAuthors();
  }
  deleteCourse(id: string) {
    return this.courseApiService.deleteCourse(id);
  }
  editCourse(course: ICourse, id: string) {
    return this.courseApiService.editCourse(course, id);
  }
  getCourseById(id: string) {
    return this.courseApiService.getCourseById(id);
  }
}
