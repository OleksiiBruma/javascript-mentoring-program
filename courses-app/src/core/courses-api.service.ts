import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ICourse } from "../app/models/course.model";
import { catchError, take, switchMap } from "rxjs/operators";
import { throwError, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CoursesApiService {
  constructor(private http: HttpClient) {}
  fetchCourses() {
    return this.http.get<ICourse[]>("http://localhost:3001/api/courses");
  }
  createCourses(newCourse: ICourse) {
    return this.http.post<ICourse>(
      "http://localhost:3001/api/courses",
      newCourse
    );
  }
  fetchAuthors() {
    return this.http.get<[]>("http://localhost:3001/api/authors");
  }
  deleteCourse(id: string) {
    return this.http
      .delete(`http://localhost:3001/api/courses/${id}`)
      .pipe(switchMap(() => id));
  }
  editCourse(course: ICourse, id: string) {
    return this.http.put<ICourse>(
      `http://localhost:3001/api/courses/${id}`,
      course
    );
  }
  getCourseById(id: string) {
    return this.http
      .get<ICourse>(`http://localhost:3001/api/courses/${id}`)
      .pipe(catchError(this.handleError));
  }
  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unkknown error occured!";
    if (!errorResponse.error || !errorResponse.error.message) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error.message;
    return throwError(errorMessage);
  }
}
