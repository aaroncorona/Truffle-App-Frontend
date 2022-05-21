import { Component } from '@angular/core';
import {FansService} from "./fans.service";

@Component({
  selector: 'fans',
  templateUrl: './fans.component.html',
})

export class FansComponent {
  service: FansService;
  jsonGetResult: any; // make public
  nameBoxInput: string;

  constructor(service: FansService) {
    this.service = service

    // Get List of Fans (the json is to be parsed in the HTML)
    this.service.getFanList().subscribe(data => {this.jsonGetResult = data;})

    // Capture text box
    this.nameBoxInput = ((document.getElementById("t1") as HTMLInputElement).value);
    console.log(this.nameBoxInput);

    // Post user
    this.service.postFan("another test...");
  }
}

