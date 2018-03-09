import { Component, OnInit} from '@angular/core';
import {HttpService} from "./services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appUrl = 'http://localhost:4200/';
  authorizated = false;
  accaccessCode =``;

  constructor(private http: HttpService) {

  }

  logOut() {
    localStorage.clear();
    window.location.href = this.appUrl;
  }
  ngOnInit(){

    if (window.location.href.indexOf('access_token=') !== -1) {
      this.accaccessCode = (window.location.href.split('access_token='))[1];
      localStorage.setItem('token', this.accaccessCode);
      window.location.href = this.appUrl;
    }
    if (localStorage.getItem('token')) {
      this.authorizated = true;
      console.log(this.accaccessCode);
    }
    if (!localStorage.getItem('token')) {
      this.authorizated = false;
    }
  }
}
