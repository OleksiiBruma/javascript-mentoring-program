import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
const loginRoute = [{ path: "login", component: LoginComponent }];
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(loginRoute)],
  exports: [LoginComponent]
})
export class LoginModule {}
