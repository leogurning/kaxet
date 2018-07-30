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
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/${userid}?artistid=${artistid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  checkAlbum(userid, oAlbum){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/checkalbumname/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateAlbumphoto(albumid, oAlbum){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/updatealbumphoto/${albumid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbums(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/report/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumCount(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/albumcount/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getArtistAlbums(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/artistalbumreport/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  
  getArtistAlbumsStats(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/artistalbumreportstats/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggAlbums(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/aggreport/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggAlbumstats(userid, oAlbum) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/album/aggstats/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getAlbum(albumid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/album/${albumid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumList(userid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/albumlist/${userid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAlbumListbyArtist(userid,artistid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`api/albumlistbyartist/${userid}?artistid=${artistid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteAlbum(albumid) {
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`api/album/${albumid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  pubsaveAlbum(userid, oAlbum){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubaddalbum/${userid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  pubupdateAlbumphoto(albumid, oAlbum){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`api/pubeditalbumphoto/${albumid}`, JSON.stringify(oAlbum), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  pubdeleteAlbum(albumid, oAlbum){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
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
