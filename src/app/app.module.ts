import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserPageComponent } from './user-page/user-page.component';
import {HttpService} from "./services/http.service";
import { UserphotoComponent } from './userphoto/userphoto.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserPageComponent,
    UserphotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
