import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class NotifService {
  public jwtToken: string;
  public notifurl: String;

  constructor(private http: Http, private globals: Globals) { 
    this.notifurl = globals.notifurl;
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
  }

  sendemailverification(oLink) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post(`${this.notifurl}/sendverification`,JSON.stringify(oLink), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  sendresetpasswd(oLink) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post(`${this.notifurl}/sendresetpassword`,JSON.stringify(oLink), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  recvemailverification(hash) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.get(`${this.notifurl}/verify?id=${hash}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  pageverification(hash) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.get(`${this.notifurl}/pgverify?id=${hash}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  sendemailwelcome(oLink) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post(`${this.notifurl}/welcomemail`,JSON.stringify(oLink), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  senddeactivation(oLink) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post(`${this.notifurl}/deactivationemail`,JSON.stringify(oLink), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
