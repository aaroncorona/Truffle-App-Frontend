import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FansService {
  result: any;
  h: HttpClient;

  constructor(h: HttpClient) {
    this.h = h;
  }

  // Use GET API to return JSON
  getData(){
    let url = 'http://localhost:8080/users/json';
    return this.h.get(url);
  }
}
