import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SongService {
  public jwtToken: String;

  constructor(private http: Http) { 
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
        this.jwtToken = theUser.token;
    }
  }

  saveSong(userid, artistid, albumid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/song/${userid}?artistid=${artistid}&albumid=${albumid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  publishSong(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/publishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  cancelPublishSong(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/cancelpublishsong/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateSongPreview(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updatesongpreview/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  updateSongFile(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updatesongfile/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSong(songid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/song/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongAgg(songid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/songaggregate/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteSong(songid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`api/song/${songid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggSongs(userid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/song/aggreport/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongs(userid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/song/report/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getSongList(userid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/song/list/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
