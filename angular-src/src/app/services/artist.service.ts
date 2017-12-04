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
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {
        this.jwtToken = theUser.token;
    }
  }

  uploadArtistphoto(oFile){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    //console.log(oFile.getAll('artistimage'));
    return this.http.post('api/artistphotoupload', oFile, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
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

  updateArtistphoto(artistid, oArtist){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updateartistphoto/${artistid}`, JSON.stringify(oArtist), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteArtistPhoto(oArtist){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/artistphotodelete', oArtist, options)
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

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}