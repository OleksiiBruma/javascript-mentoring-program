import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.sass"]
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<string>();
  query: "";
  onFormSubmit(value: { query: string }) {
    this.onSearch.emit(value.query);
  }
}
