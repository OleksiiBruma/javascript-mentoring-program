import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { DataService, DataItem } from "../shared/data.service";

@Component({
  selector: "Courses",
  templateUrl: "./courses.component.html",
})
export class CoursesComponent implements OnInit {
  items: Array<DataItem>;
  searchPhrase: string;
  constructor(private _itemService: DataService) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems();
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    this.items = this._itemService.filterItems(searchBar.text);
  }

  onClear(args) {
    const searchBar = args.object as SearchBar;
    this.searchPhrase = searchBar.text;
    this.items = this._itemService.getItems();
  }
}
