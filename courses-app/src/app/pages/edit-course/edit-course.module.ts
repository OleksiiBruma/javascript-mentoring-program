import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditCourseComponent } from "./edit-course.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthGuard } from "src/auth/auth.guard";
const editRoute = [
  {
    path: "courses/new",
    canActivate: [AuthGuard],
    component: EditCourseComponent
  },
  {
    path: "courses/:id",
    canActivate: [AuthGuard],
    component: EditCourseComponent
  }
];
@NgModule({
  declarations: [EditCourseComponent],
  imports: [RouterModule.forRoot(editRoute), CommonModule, SharedModule],
  exports: [EditCourseComponent]
})
export class EditCourseModule {}
