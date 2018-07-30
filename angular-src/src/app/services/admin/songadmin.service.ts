import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SongadminService {
  public jwtToken: string;
  public adminurl: String;
  
  constructor(private http: Http, private globals: Globals) {
      this.adminurl = globals.adminurl;
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {
        this.jwtToken = theUser.token;
      }        
   }
  
  publishSong(songid, oSong){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/publishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  cancelpublishSong(songid, oSong){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/cancelpublishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getAggSongs(oSong) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/songadm/aggreport`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getAggSongsnonpublish(oSong) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/songadm/aggreportnonpublish`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getPendingSongCount(userid, oSong) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/songadm/pendingsongcount/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getSong(songid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/songadm/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongAgg(songid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/songaggregate/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}
