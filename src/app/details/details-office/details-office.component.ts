import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-details-office',
  templateUrl: './details-office.component.html',
  styleUrls: ['./details-office.component.less']
})
export class DetailsOfficeComponent implements OnInit {

  private officeDatas: any[];
  private contentDatas: any[];

  constructor(
    private activateInfo: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void{
    let paramsId: number = this.activateInfo.snapshot.params["id"];
    this.http.get<JSON>('assets/data/contentDatas.json', { observe: 'response' }).subscribe(resp => {
      this.contentDatas = resp.body['data'];
      for (let index = 0; index < this.contentDatas.length; index++) {
        if ((this.contentDatas[index].id) == paramsId) {
          if (this.contentDatas[index].financing === '1') {
            this.contentDatas[index].financing = '未融资';
          } else if (this.contentDatas[index].financing === '2') {
            this.contentDatas[index].financing = '天使轮';
          } else if (this.contentDatas[index].financing === '3') {
            this.contentDatas[index].financing = '已上市';
          }
          this.officeDatas = this.contentDatas[index];
        }
      }
    });
  }
}
