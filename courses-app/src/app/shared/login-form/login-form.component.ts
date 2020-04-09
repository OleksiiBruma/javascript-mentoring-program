import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.sass"]
})
export class LoginFormComponent {
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
    alert(JSON.stringify(this.loginForm.value, null, 2));
  }
}
