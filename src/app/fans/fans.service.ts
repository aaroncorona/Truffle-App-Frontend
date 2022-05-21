import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FansService {
  result: any;
  h: HttpClient;
  url: string;
  jsonPushResult: any;

  constructor(h: HttpClient) {
    this.h = h;
    this.url = 'http://test3app-env.eba-jdzv33hs.us-west-1.elasticbeanstalk.com/';
  }

  // Use GET API to return JSON
  getFanList(){
    let getExt = 'fans/json';
    let getUrl = this.url + getExt;
    return this.h.get(getUrl);
  }

  // Use POST API to add a new record (Fan obj)
  // Example URL: https://test3app-env.eba-jdzv33hs.us-west-1.elasticbeanstalk.com/fans/signup?name=dad&age=99
  postFan(name: string, age=100){
    let postExt = 'fans/signup';
    postExt += ("?name=" + name + "&age=" + age);
    let postUrl = this.url + postExt;
    return this.h.post<any>(postUrl, null)
      .subscribe(data => {this.jsonPushResult = data});
  }
}
