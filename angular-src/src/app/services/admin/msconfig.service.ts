import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class MsconfigService {
  public jwtToken: string;
  public adminurl: String;

  constructor(private http: Http, private globals: Globals) {
      this.adminurl = globals.adminurl;
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {
        this.jwtToken = theUser.token;
      }            
   }

  uploadGenrephoto(oFile){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.adminurl}/api/genrephotoupload`, oFile, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  
  deleteGenrephoto(oGenre){
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.adminurl}/api/genrephotodelete`, oGenre, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  saveMsconfig(userid, oMsconfig){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/msconfig/${userid}`, JSON.stringify(oMsconfig), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  deleteMsconfig(msconfigid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`${this.adminurl}/api/msconfig/${msconfigid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateMsconfigfile(userid, oMsconfig){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.adminurl}/api/msconfig/${userid}`, JSON.stringify(oMsconfig), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getAggMsconfig(oMsconfig) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.adminurl}/api/mscfgaggreport`, JSON.stringify(oMsconfig), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getMsconfigAgg(msconfigid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/msconfigagg/${msconfigid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getMsconfig(msconfigid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/api/msconfig/${msconfigid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getMsconfigbygroup(msconfiggroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/msconfigbygroup/${msconfiggroup}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getMsconfigvalue(msconfigcode, msconfiggroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/msconfigvalue/${msconfigcode}?group=${msconfiggroup}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
  getMsconfiggroup() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.adminurl}/msconfiggroup`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }

}
