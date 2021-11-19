import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // TODO
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyTableModule} from "./my-table/my-table.module";
import {CommonModule} from "@angular/common";
import {BurritoService} from "./burrito.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MyTableModule
  ],
  providers: [
    BurritoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
