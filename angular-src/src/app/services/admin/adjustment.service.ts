import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdjustmentService {
  public jwtToken: string;
  public adminurl: String;

  constructor(private http: Http, private globals: Globals) {
    this.adminurl = globals.adminurl;
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
      this.jwtToken = theUser.token;
    } 
   }

  saveAdjustment(userid, oAdjustment){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/saveadjustment/${userid}`, JSON.stringify(oAdjustment), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSumAdjustmentAggs(userid, oAdjustment) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.adminurl}/api/adjustmentagg/${userid}`, JSON.stringify(oAdjustment), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getAdjustmentAgg(adjid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/getadjustmentagg/${adjid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  editAdjustment(adjid, oAdjustment){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/editadjustment/${adjid}`, JSON.stringify(oAdjustment), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  updateStatusadjustment(adjid, oAdjustment){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/updatestatusadjustment/${adjid}`, JSON.stringify(oAdjustment), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}
