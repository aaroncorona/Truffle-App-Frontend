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
    let url = 'http://test3app-env.eba-jdzv33hs.us-west-1.elasticbeanstalk.com/fans/json';
    return this.h.get(url);
  }
}
