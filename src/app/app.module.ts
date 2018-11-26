import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ListCountryService} from "./services/list-country.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
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
