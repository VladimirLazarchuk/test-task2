import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-userphoto',
  templateUrl: './userphoto.component.html',
  styleUrls: ['./userphoto.component.scss']
})
export class UserphotoComponent implements OnInit {

  @Input() photo;

  constructor() { }

  ngOnInit() {
  }

}
