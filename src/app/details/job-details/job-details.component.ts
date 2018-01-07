import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.less']
})
export class JobDetailsComponent implements OnInit {

  private jobDetails: any[];
  private jobdetails: any[];

  constructor( 
    private activateInfo: ActivatedRoute,
    private http: HttpClient 
  ) { }

  ngOnInit(): void{
    let paramsId: number = this.activateInfo.snapshot.params["id"];
    this.http.get<JSON>('assets/data/jobDetails.json', { observe: 'response' }).subscribe(resp => {
      this.jobDetails = resp.body['data'];
      for (let index = 0; index < this.jobDetails.length; index++) {
        if ((this.jobDetails[index].id) == paramsId) {
          this.jobdetails = this.jobDetails[index];
        }
      }
    });
  }
}
