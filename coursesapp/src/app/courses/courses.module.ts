import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CoursesComponent } from "./courses.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
  imports: [NativeScriptCommonModule, CoursesRoutingModule],
  declarations: [CoursesComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoursesModule {}
