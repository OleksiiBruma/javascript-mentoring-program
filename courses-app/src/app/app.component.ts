import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/auth/auth.service";
import { CoursesService } from "src/core/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
