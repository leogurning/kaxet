import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SongpurchaseService {
  public jwtToken: String;
  constructor(private http: Http) { 
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
        this.jwtToken = theUser.token;
    }
  }
  saveSongpurchase(userid, oSongpurchase){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/songpurchase/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getSongpurchase(songpurchaseid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/songpurchase/${songpurchaseid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteSongpurchase(songpurchaseid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`api/songpurchase/${songpurchaseid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateStatuspurchase(songpurchaseid, oSongpurchase){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/songpurchase/${songpurchaseid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getSongpurchaseAggs(userid, oSongpurchase) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/songpurchaseagg/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongpurchaseAgg(songpurchaseid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/songpurchaseagg/${songpurchaseid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getPendingsongpurchaseAggs(userid, oSongpurchase) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pendingsongpurchaseagg/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getPendingSongpurchaseCount(userid, oSongpurchase) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pendingsongpurchasecount/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getAdmSongpurchaseAggs(userid, oSongpurchase) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/admsongpurchaseagg/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubSaveSongpurchasePayment(userid, oSongpurchase) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/actionpmtpurchase/${userid}`, JSON.stringify(oSongpurchase), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}
