import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ListCountryService} from "./services/list-country.service";
import {HttpModule} from "@angular/http";
import {SideBarComponent} from "./component/sidebar";
import {TreeComponent} from "./component/tree";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxDatatableModule
  ],
  providers: [ListCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
