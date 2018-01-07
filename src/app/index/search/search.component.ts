import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit():any {
    jQuery(window).scroll(function () {
      if (jQuery(window).scrollTop() > 65) {    //垂直滚动条钓offset 大于90时。
        jQuery(".serachComponent").css({
          "background-color": "#01c2a3",
        });
      } else {
        jQuery(".serachComponent").css({
          "background-color": "rgba(0, 0, 0, 0)",
        });
      }
    });
  }

}
