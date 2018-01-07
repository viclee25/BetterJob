// export class ContentData {
//     constructor(
//         public id: number,
//         public jobName: string,
//         public companyName: string,
//         public city: string,
//         public workingAge: number,
//         public education: number,
//         public time: string,
//         public pay: number,
//         public logo: any,
//         public vocation: string,
//         public financing: any
//     ) { }
// }
import { Injectable } from "@angular/core";

@Injectable()
export class ContentData {
    public id: number;
    public jobName: string;
    public companyName: string;
    public city: string;
    public workingAge: number;
    public education: number;
    public time: string;
    public pay: number;
    public logo: any;
    public vocation: string;
    public financing: any;
}