import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {

  private userinfo = {
    userpic:"./assets/img/1.png",
    username:"李吉涛"
  };

  constructor() { }

  ngOnInit() {
  }

}
