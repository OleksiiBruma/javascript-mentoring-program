import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthGuard } from "src/auth/auth.guard";
const coursesRoute = [
  { path: "courses", canActivate: [AuthGuard], component: CoursesComponent }
];

@NgModule({
  declarations: [CoursesComponent],
  imports: [RouterModule.forRoot(coursesRoute), CommonModule, SharedModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
