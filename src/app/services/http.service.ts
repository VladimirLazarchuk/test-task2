import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {
  baseUrl = `https://api.instagram.com/v1`;

  constructor(private http: HttpClient) {
  }


  getSelfInfromation(): Observable<any> {
    return this.http.get(this.baseUrl + '/users/self/?access_token=' + localStorage.getItem('token'));
  }

  getSelfMediaRecent(): Observable<any> {
    return this.http.get(this.baseUrl + '/users/self/media/recent/?access_token=' + localStorage.getItem('token'));
  }

  getSelfFolows(): Observable<any> {
    return this.http.get('https://api.instagram.com/v1/users/self/followed-by?access_token=' + localStorage.getItem('token'));
  }

}
