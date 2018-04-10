import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-roll-picture',
  templateUrl: './roll-picture.component.html',
  styleUrls: ['./roll-picture.component.less']
})
export class RollPictureComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      direction: 'horizontal',
      paginationClickable: true,
      longSwipesRatio: 0.3,
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      },
      speed: 2000,
      touchRatio: 1,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper  
      observeParents: true,//修改swiper的父元素时，自动初始化swiper  
    });
    swiper.pagination.bullets.css('background', 'rgb(255, 255, 255)');  
  }
}
