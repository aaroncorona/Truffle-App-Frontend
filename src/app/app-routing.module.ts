import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FansComponent} from "./fans/fans.component";
import {BioComponent} from "./bio/bio.component";
import {NavComponent} from "./nav/nav.component";

const routes: Routes = [
  {path: '', component: BioComponent},
  {path: 'fans', component: FansComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
