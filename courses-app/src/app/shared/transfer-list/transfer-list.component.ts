import { Component, Input, OnInit, forwardRef } from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-transfer-list",
  templateUrl: "./transfer-list.component.html",
  styleUrls: ["./transfer-list.component.sass"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TransferListComponent)
    }
  ]
})
export class TransferListComponent implements OnInit, ControlValueAccessor {
  @Input() fullList: [string];
  @Input() selectedList: [string];

  public newSelectedList = new FormControl([]);
  private onChange: ([]) => void;
  private onTouched: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.newSelectedList.disable();
    } else {
      this.newSelectedList.enable();
    }
  }

  doInput() {
    this.onChange(this.rightItems);
  }
  doBlur() {
    this.onTouched();
  }
  writeValue(arr: any): void {
    this.newSelectedList.setValue(arr);
  }

  leftItems: string[];
  rightItems: string[];
  ngOnInit() {
    this.leftItems = this.not(this.fullList, this.selectedList);
    this.rightItems = this.selectedList;
  }
  selectedItemLeft = "";
  selectedItemRight = "";
  selectLeftItem(item: string) {
    this.selectedItemLeft = item;
  }
  selectRightItem(item: string) {
    this.selectedItemRight = item;
  }
  addToRightList() {
    if (this.selectedItemLeft) {
      this.leftItems.splice(this.leftItems.indexOf(this.selectedItemLeft), 1);
      this.rightItems.push(this.selectedItemLeft);
      this.selectedItemLeft = "";
    }
  }
  addToLeftList() {
    if (this.selectedItemRight) {
      this.rightItems.splice(
        this.rightItems.indexOf(this.selectedItemRight),
        1
      );
      this.leftItems.push(this.selectedItemRight);
      this.selectedItemRight = "";
    }
  }
  not(a: [string], b: [string]) {
    return a.filter(value => b.indexOf(value) === -1);
  }
}
