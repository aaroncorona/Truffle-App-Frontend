import { Component } from '@angular/core';
import {FansService} from "./fans.service";

@Component({
  selector: 'fans',
  templateUrl: './fans.component.html',
})

export class FansComponent {
  service: FansService;
  jsonResult: any;
  names: any;

  constructor(service: FansService) {
    this.service = service

    // Save results
    this.service.getData().subscribe(data => {console.log(data);})
    this.service.getData().subscribe(data => {this.jsonResult = data;})
  }
}

