import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Course } from "./course.model";
import { catchError, take } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CoursesApiService {
  constructor(private http: HttpClient) {}
  fetchCourses() {
    return this.http.get<Course[]>("http://localhost:3001/api/courses");
  }
  createCourses(newCourse: Course) {
    return this.http.post("http://localhost:3001/api/courses", newCourse);
  }
  fetchAuthors() {
    return this.http.get<[]>("http://localhost:3001/api/authors");
  }
  deleteCourse(id: string) {
    return this.http.delete(`http://localhost:3001/api/courses/${id}`);
  }
  editCourse(course: Course, id: string) {
    return this.http.put(`http://localhost:3001/api/courses/${id}`, course);
  }
  getCourseById(id: string) {
    return this.http
      .get<Course>(`http://localhost:3001/api/courses/${id}`)
      .pipe(catchError(this.handleError));
  }
  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unkknown error occured!";
    console.log(errorResponse.error.message);
    if (!errorResponse.error || !errorResponse.error.message) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error.message;
    return throwError(errorMessage);
  }
}
