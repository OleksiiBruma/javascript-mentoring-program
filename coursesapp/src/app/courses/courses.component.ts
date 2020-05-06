import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { CoursesService, DataItem } from "../shared/courses.service";

@Component({
  selector: "Courses",
  templateUrl: "./courses.component.html",
})
export class CoursesComponent implements OnInit {
  items: Array<DataItem>;
  searchPhrase: string;
  constructor(private _itemService: CoursesService) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems();
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    this.items = this._itemService.filterItems(searchBar.text);
  }

  onClear() {
    this.searchPhrase = "";
    this.items = this._itemService.getItems();
  }
}
