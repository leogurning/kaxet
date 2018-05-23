import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ArtistService {
  public jwtToken: String;

  constructor(private http: Http) {
    var theUser: any;
    setTimeout( theUser = JSON.parse(localStorage.getItem('currentUser')), 100); 
    if (theUser) {
        this.jwtToken = theUser.token;
    }
  }

  saveArtist(userid, oArtist){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/artist/${userid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubsaveArtist(userid, oArtist){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubartist/${userid}`, oArtist, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  updateArtistphoto(artistid, oArtist){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updateartistphoto/${artistid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubupdateArtistphoto(artistid, oArtist){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubupdateartistphoto/${artistid}`, oArtist, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getArtists(userid, oArtist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/artist/report/${userid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getArtistCount(userid, oArtist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/artistcount/${userid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggArtists(userid, oArtist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/artist/aggreport/${userid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getAggArtiststats(userid, oArtist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/artist/aggstats/${userid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getArtist(artistid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/artist/${artistid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getArtistList(userid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/artistlist/${userid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteArtist(artistid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`api/artist/${artistid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubdeleteArtist(artistid, oArtist) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubdelartist/${artistid}`,JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}