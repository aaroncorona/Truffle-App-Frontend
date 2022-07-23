import {Component} from '@angular/core';
import {FansService} from "./fans.service";

@Component({
  selector: 'fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})

export class FansComponent {
  service: FansService;
  jsonGetResult: any; // make public
  nameBoxInput: string;
  ageBoxInput: number;

  constructor(service: FansService) {
    this.service = service
    this.nameBoxInput = "";
    // Populate box with random age
    this.ageBoxInput = Math.floor(Math.random() * (99 - 1 + 1));
  }

  // Get List of Fans (the json is to be parsed in the HTML)
  getFans(){
    this.service.getFanList()
      .subscribe(data => {this.jsonGetResult = data;})
  }

  // Return name box results (for ad hoc checks)
  logName(nameBoxInput: string){
    console.log(nameBoxInput);
    return nameBoxInput;
  }

  // Post new fan using the input field
  post(nameBoxInput: string){
    if(this.nameBoxInput != ""){
      this.service.postFan(this.nameBoxInput, this.ageBoxInput);
      this.getFans(); // instantly refresh fan list
    }
  }

  ngOnInit(): void {
    // Get all fans for the HTML on instantiation
    this.getFans();
  }
}

