import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectErrorMessage } from "src/app/pages/courses/+state/courses.selectors";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.sass"]
})
export class AlertComponent {
  constructor(private store: Store) {}
  error$ = this.store.pipe(select(selectErrorMessage));
}
