import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { DialogComponent } from "./dialog/dialog.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent,
    DialogComponent,
    LoginFormComponent,
    SearchBarComponent
  ],
  imports: [CommonModule],
  exports: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent,
    DialogComponent,
    LoginFormComponent,
    SearchBarComponent
  ]
})
export class SharedModule {}
