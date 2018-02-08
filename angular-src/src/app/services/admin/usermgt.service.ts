import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsermgtService {
  public jwtToken: string;
  public adminurl = 'https://api-kxadmin-dot-kaxet-191909.appspot.com';

  constructor(private http: Http) {
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {
        this.jwtToken = theUser.token;
      }    
   }

   registerAdmin(oUser) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post(`${this.adminurl}/registerAdmin`, JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  } 

  getUserLabels(oLabels) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/userlabelreport`, JSON.stringify(oLabels), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateLabelStatus(labelid, oLabel){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/changelabelstatus/${labelid}`, JSON.stringify(oLabel), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateLabelBalance(labelid, oLabel){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/changelabelbalance/${labelid}`, JSON.stringify(oLabel), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}