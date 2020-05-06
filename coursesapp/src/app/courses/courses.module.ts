import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CoursesComponent } from "./courses.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
  ],
  declarations: [CoursesComponent, EditCourseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoursesModule {}
