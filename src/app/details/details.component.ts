import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {


  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    jQuery("app-foot-nav ul").hide();
  }
  back() {
    jQuery("app-foot-nav ul").show();
    this.location.back();
  }
}
