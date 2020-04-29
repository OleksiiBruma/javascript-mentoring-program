import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError, BehaviorSubject, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  loggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  autoLogin() {
    const userData: { userName: string } = JSON.parse(
      localStorage.getItem("angularLoggedIn")
    );
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.userName);
    this.user.next(loadedUser);
  }
  login(login: string, password: string) {
    return this.http
      .post<{}>("http://localhost:3001/api/login", {
        login: login,
        password: password
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          const user = new User(login);
          this.user.next(user);
          localStorage.setItem("angularLoggedIn", JSON.stringify(user));
        })
      );
  }
  logout() {
    this.user.next(null);
    this.router.navigate(["/login"]);
    this.loggedIn = false;
    localStorage.removeItem("angularLoggedIn");
  }
  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unkknown error occured!";
    if (!errorResponse.error || !errorResponse.error.message) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error.message;
    return throwError(errorMessage);
  }
}
