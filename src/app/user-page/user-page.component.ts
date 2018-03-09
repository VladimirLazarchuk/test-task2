import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  fullName = '';
  imgPath = '';
  photos = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getSelfInfromation().subscribe(data => {
      this.fullName = data.data.full_name;
      this.imgPath = data.data.profile_picture;
    });
    this.httpService.getSelfMediaRecent().subscribe(data => {
      data = data.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].caption) {
        }
        this.photos.push({
          title: data[i].caption ? data[i].caption.text : 'Без названия',
          img: data[i].images.standard_resolution.url
        });
      }
    });
    this.httpService.getSelfFolows().subscribe(data => {
      // console.log(data);
    })
    console.log(this.photos);
  }

}
