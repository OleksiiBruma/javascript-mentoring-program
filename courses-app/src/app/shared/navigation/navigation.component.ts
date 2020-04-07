import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.sass"]
})
export class NavigationComponent {
  @Input() courseToEdit;
  userName = "user1";
}
