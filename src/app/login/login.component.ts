import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    jQuery("app-foot-nav ul").hide()
  }
  
  back() {
    jQuery("app-foot-nav ul").show();
    this.location.back();
  }
}
