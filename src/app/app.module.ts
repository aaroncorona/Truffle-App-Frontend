import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FansComponent } from './fans/fans.component';
import {FansService} from "./fans/fans.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    FansService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
