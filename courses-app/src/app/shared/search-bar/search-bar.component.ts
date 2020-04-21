import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { setFilterTerm } from "src/app/pages/courses/+state/courses.actions";
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.sass"]
})
export class SearchBarComponent {
  query: string;
  constructor(private store: Store) {}
  onFormSubmit(value: string) {
    this.store.dispatch(setFilterTerm({ query: value }));
  }
  ngOnDestroy() {
    this.store.dispatch(setFilterTerm({ query: "" }));
  }
}
