import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TrfbalancemgtService {
  public jwtToken: string;
  public adminurl: String;

  constructor(private http: Http, private globals: Globals) 
  {
    this.adminurl = globals.adminurl;
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
      this.jwtToken = theUser.token;
    }    
   }

   getTrfbalancereqAggs(userid, oTrfbalancereq) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.adminurl}/api/pendingtrfbalancereq/${userid}`, JSON.stringify(oTrfbalancereq), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getTrfbalancereqAgg(trfreqid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/gettrfbalancereqagg/${trfreqid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getSumTrfbalancereqAggs(userid, oTrfbalancereq) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.adminurl}/api/trfbalancereqagg/${userid}`, JSON.stringify(oTrfbalancereq), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  updateStatustrfbalance(trfbalancereqid, oTrfbalancereq){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/updatestatustrfbalancereq/${trfbalancereqid}`, JSON.stringify(oTrfbalancereq), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  editposttrfbalance(trfbalancereqid, oTrfbalancereq){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/editposttrfbalancereq/${trfbalancereqid}`, JSON.stringify(oTrfbalancereq), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  completetrfbalance(trfbalancereqid, oTrfbalancereq){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/completetrfbalancereq/${trfbalancereqid}`, JSON.stringify(oTrfbalancereq), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}
