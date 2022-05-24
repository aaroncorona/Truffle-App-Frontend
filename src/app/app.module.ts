import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FansComponent } from './fans/fans.component';
import {FansService} from "./fans/fans.service";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { BioComponent } from './bio/bio.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FansComponent,
    BioComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    FansService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
