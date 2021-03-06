import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  public jwtToken: string;

  constructor(private http: Http) {
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {  
        this.jwtToken = theUser.token;
      }    
  }

/*   uploadpreview(oFile){
    console.log(oFile.getAll('usrimage'));
    return this.http.post('http://localhost:2000/flupload', oFile)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
 */
  register(oUser) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post('register', JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  registerlabel(oUser) {
    let headers = new Headers ({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     return this.http.post('registerlabel', JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  getUser(userid) {
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {  
        this.jwtToken = theUser.token;
      }    
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `${this.jwtToken}`);
      let options = new RequestOptions({ headers: headers });

      return this.http.get(`api/user/${userid}`, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateUser(userid, oUser){
      const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {  
        this.jwtToken = theUser.token;
      }    
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `${this.jwtToken}`);
      let options = new RequestOptions({ headers: headers });

      return this.http.put(`api/user/${userid}`, JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

/*   updatePhoto(userid, oUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`http://localhost:2000/api/editphoto/${userid}`, JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
 
  deletePhoto(oUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:2000/api/delphoto', JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }
*/

  updatePassword(userid, oUser){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `${this.jwtToken}`);
      let options = new RequestOptions({ headers: headers });

      return this.http.put(`api/password/${userid}`, JSON.stringify(oUser), options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  updateEmail(userid, oUser){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/email/${userid}`, JSON.stringify(oUser), options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  
  updatehash(hashid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`updatehash/${hashid}`, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  
  emailVerify(oUser){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/emailverify`, JSON.stringify(oUser), options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  pubemailVerify(oUser){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`api/pubemailverify`, JSON.stringify(oUser), options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  resetPasswd(oUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`resetpwd`, JSON.stringify(oUser), options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  doResetPasswd(oUser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`doresetpwd`, JSON.stringify(oUser), options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}