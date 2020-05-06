import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CoursesComponent } from "./courses.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

const routes: Routes = [
  { path: "default", component: CoursesComponent },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CoursesRoutingModule {}
