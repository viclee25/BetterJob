import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-nologin',
  templateUrl: './nologin.component.html',
  styleUrls: ['./nologin.component.less']
})
export class NologinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tologin() {
    window.location.href="/login"；  
  }
}
