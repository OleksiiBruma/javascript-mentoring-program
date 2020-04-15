import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.sass"]
})
export class LoginFormComponent {
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    login: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/),
      Validators.minLength(6)
    ])
  });

  get login() {
    return this.loginForm.get("login");
  }
  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    this.isLoading = true;
    this.authService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(
        resData => {
          this.isLoading = false;
          this.router.navigate(["/courses"]);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
  }
}
