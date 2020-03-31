import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.sass"]
})
export class DialogComponent {
  @Input() buttonText;
  isOpen = false;

  onClick() {
    this.isOpen = true;
  }
  onClose({ target }) {
    if (
      target.classList.contains("dialog") ||
      target.classList.contains("btn")
    ) {
      this.isOpen = false;
    }
  }
  constructor() {}
}
