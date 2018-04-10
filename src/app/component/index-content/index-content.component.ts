import { Component, OnInit } from '@angular/core';
import { ContentData } from './index-content-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.less']
})
export class IndexContentComponent implements OnInit {

  contentDatas: any[];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void{
    let isFinancing
    this.http.get<JSON>('assets/data/contentDatas.json', { observe: 'response' }).subscribe(resp => {
      this.contentDatas = resp.body['data'];
      for (let index = 0; index < this.contentDatas.length; index++) {
        if (this.contentDatas[index].financing === '1') {
          this.contentDatas[index].financing = '未融资';
        } else if (this.contentDatas[index].financing === '2') {
          this.contentDatas[index].financing = '天使轮';
        } else if (this.contentDatas[index].financing === '3') {
          this.contentDatas[index].financing = '已上市';
        }
      }
    });
  }
}
