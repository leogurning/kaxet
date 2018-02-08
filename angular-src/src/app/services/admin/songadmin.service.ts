import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SongadminService {
  public jwtToken: string;
  //public adminurl = 'https://kxadmin.herokuapp.com';
  public adminurl = 'https://api-kxadmin-dot-kaxet-191909.appspot.com';
  
  constructor(private http: Http) {
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {
        this.jwtToken = theUser.token;
      }        
   }
  
  publishSong(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/publishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  cancelpublishSong(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/cancelpublishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getAggSongs(oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/songadm/aggreport`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSong(songid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/songadm/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongAgg(songid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/songaggregate/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
