import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FansComponent} from "./fans/fans.component";

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'fans', component: FansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
