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
    //const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    var theUser: any;
    setTimeout( theUser = JSON.parse(localStorage.getItem('currentUser')), 100); 
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

  pubsaveSong(userid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubsong/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubeditSong(userid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubeditsong/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  uploadSongfiles(userid, oSong){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/uploadsong/${userid}`, oSong, options)
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
  pubupdateSongPreview(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubeditsongprvw/${songid}`, JSON.stringify(oSong), options)
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
  pubupdateSongFile(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubeditsongfile/${songid}`, JSON.stringify(oSong), options)
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
  pubdeleteSong(songid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubdeletesong/${songid}`, JSON.stringify(oSong), options)
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
  
  getSongCount(userid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/songcount/${userid}`, JSON.stringify(oSong), options)
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
  
  getSongListstats(userid, oSong) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/song/stats/${userid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  songbuyincrement(songid, oSong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/songbuyincrement/${songid}`, JSON.stringify(oSong), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }

}
