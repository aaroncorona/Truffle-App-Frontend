import { Component } from '@angular/core';
import {FansService} from "./fans.service";

@Component({
  selector: 'fans',
  templateUrl: './fans.component.html',
})

export class FansComponent {
  service: FansService;
  jsonGetResult: any;
  jsonPushResult: any;
  names: any;

  constructor(service: FansService) {
    this.service = service

    // Get List of Fans (json to be parsed in HTML)
    this.service.getFanList().subscribe(data => {console.log(data);})
    this.service.getFanList().subscribe(data => {this.jsonGetResult = data;})

    // Post user
    this.service.postFan("another test...");
  }
}

