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

  getAlbums(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/report/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumCount(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/albumcount/${userid}`, JSON.stringify(oAlbum), options)
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
  
  getArtistAlbumsStats(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/artistalbumreportstats/${userid}`, JSON.stringify(oAlbum), options)
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

  getAggAlbumstats(userid, oAlbum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/aggstats/${userid}`, JSON.stringify(oAlbum), options)
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

  pubsaveAlbum(userid, oAlbum){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubaddalbum/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  pubupdateAlbumphoto(albumid, oAlbum){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubeditalbumphoto/${albumid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubdeleteAlbum(albumid, oAlbum){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubdeletealbum/${albumid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }

}
