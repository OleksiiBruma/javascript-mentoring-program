import { Component } from "@angular/core";
import { CoursesService } from "src/core/courses.service";
import { Course } from "src/core/course.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.sass"]
})
export class EditCourseComponent {
  allAuthors: [];
  currentCourse: Course;
  pageType: string;
  loading: boolean;
  error: string;
  id: string;
  courseTitle: string;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.courseTitle = "";
    this.loading = true;
    _activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      if (this.id === "new") {
        this.pageType = "new";
        this.courseTitle = "new";
        this.loading = false;
        return;
      }
      this.setCurrentCourse(this.id);
    });
  }
  setCurrentCourse(id: string) {
    this.coursesService.getCourseById(id).subscribe(
      course => {
        this.currentCourse = course;
        this.pageType = "edit";
        this.courseTitle = course.name;
        this.loading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.loading = false;
      }
    );
  }
  onSubmit(course: Course) {
    console.log(this.id);
    switch (this.pageType) {
      case "edit":
        this.coursesService.editCourse(course, this.id).subscribe(() => {
          this.router.navigate(["/courses"]);
        });
        break;
      case "new":
        this.coursesService.createCourse(course).subscribe(() => {
          this.router.navigate(["/courses"]);
        });
        break;
    }
  }

  ngOnInit() {
    this.coursesService
      .getAuthors()
      .subscribe(authors => (this.allAuthors = authors));
  }
}
