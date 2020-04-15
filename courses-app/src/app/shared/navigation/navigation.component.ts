import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.sass"]
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  userName: string = null;
  private userSub: Subscription;
  constructor(private authService: AuthService) {}
  @Input() courseTitle: string;
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (user) {
        this.userName = user.userName;
      }
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe;
  }
  onLogout() {
    this.authService.logout();
  }
}
