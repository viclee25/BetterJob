import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];
  constructor(
    private location: Location,
    private http: Http
  ) {
    this.dataSource = this.http.get("http://localhost:3000/users/addUser?uid=4&name=helloMySQL").map((res) => res.json());
  }

  ngOnInit() {
    jQuery("app-foot-nav ul").hide()
    this.dataSource.subscribe(
      (data) => {
        this.dataSet = data
        console.log(this.dataSet)
      }
    )
  }
  
  back() {
    jQuery("app-foot-nav ul").show();
    this.location.back();
  }

}
