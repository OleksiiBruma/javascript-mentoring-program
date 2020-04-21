import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthGuard } from "src/auth/auth.guard";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CoursesEffects } from "./+state/courses.effects";
import { coursesReducers } from "./+state/courses.reducer";
const coursesRoute = [
  { path: "courses", canActivate: [AuthGuard], component: CoursesComponent }
];

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    RouterModule.forRoot(coursesRoute),
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([CoursesEffects]),
    StoreModule.forFeature("courses-module", coursesReducers)
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {}
