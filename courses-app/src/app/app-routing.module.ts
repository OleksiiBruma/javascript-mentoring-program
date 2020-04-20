import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginModule } from "./pages/login/login.module";
import { CoursesModule } from "./pages/courses/courses.module";
import { EditCourseModule } from "./pages/edit-course/edit-course.module";
import { AuthGuard } from "src/auth/auth.guard";

const defaultRoute = [
  {
    path: "**",
    canActivate: [AuthGuard],
    redirectTo: "courses"
  }
];

@NgModule({
  imports: [
    LoginModule,
    CoursesModule,
    EditCourseModule,
    RouterModule.forRoot(defaultRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
