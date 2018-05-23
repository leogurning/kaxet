import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from '../interface/user';

@Injectable()
export class AuthService {

  public currentUser: IUser;
  
  constructor(private http: Http) { }

  isLoggedIn(): boolean {
    try {
        //const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
        var theUser: any;
        setTimeout( theUser = JSON.parse(localStorage.getItem('currentUser')), 100); 
        if (theUser) {
            this.currentUser = theUser.user;
        }
    } catch (e) {
        return false;
    }
    return !!this.currentUser;
  }

  login(oUser) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('api/login', JSON.stringify(oUser), options)
    .do((response: Response) => {
        if (response.json().success) {
            this.currentUser = <IUser>response.json().message;
            let userObj: any = {};
            userObj.user = response.json().message;
            userObj.token = response.json().token;

            localStorage.setItem('currentUser', JSON.stringify(userObj)); 
        }
        response.json();
    })
    .catch(this.handleError);
  }

  logout(): void {
    this.currentUser = null;
    setTimeout(localStorage.removeItem('currentUser'),100);
    //Clear storage after specific time
    var logoutTimer = setTimeout(localStorage.clear(), 100);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }

}