import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent
  ]
})
export class SharedModule {}
