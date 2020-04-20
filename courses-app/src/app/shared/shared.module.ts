import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { DialogComponent } from "./dialog/dialog.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { TransferListComponent } from "./transfer-list/transfer-list.component";
import { DurationPipe } from "./duration.pipe";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent,
    DialogComponent,
    LoginFormComponent,
    SearchBarComponent,
    EditFormComponent,
    TransferListComponent,
    DurationPipe,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CourseListComponent,
    CourseCardComponent,
    NavigationComponent,
    FooterComponent,
    DialogComponent,
    LoginFormComponent,
    SearchBarComponent,
    EditFormComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ]
})
export class SharedModule {}
