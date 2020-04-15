import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.sass"]
})
export class DialogComponent {
  @Input() buttonText;
  @Output() submit = new EventEmitter();
  isOpen = false;
  onSubmit() {
    this.submit.emit();
  }

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
