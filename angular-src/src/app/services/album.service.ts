import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AlbumService {
  public jwtToken: String;

  constructor(private http: Http) { 
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
        this.jwtToken = theUser.token;
    }
  }

  uploadAlbumphoto(oFile){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post('api/albumphotoupload', oFile, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  saveAlbum(userid, artistid, oAlbum){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/${userid}?artistid=${artistid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateAlbumphoto(albumid, oAlbum){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updatealbumphoto/${albumid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteAlbumPhoto(oAlbum){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/albumphotodelete', oAlbum, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbums(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/report/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getArtistAlbums(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/artistalbumreport/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggAlbums(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/aggreport/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbum(albumid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/album/${albumid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumList(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/albumlist/${userid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumListbyArtist(userid,artistid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/albumlistbyartist/${userid}?artistid=${artistid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteAlbum(albumid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`api/album/${albumid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
