import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './component/search/search.component';
import { RollPictureComponent } from './component/roll-picture/roll-picture.component';
import { IndexContentComponent } from './component/index-content/index-content.component';
import { FootNavComponent } from './component/foot-nav/foot-nav.component';
import { MineComponent } from './mine/mine.component';
import { MessageComponent } from './message/message.component';
import { CONST_ROUTING } from './app.routing';
import { DetailsComponent } from './details/details.component';
import { DetailsOfficeComponent } from './component/details-office/details-office.component';
import { JobDetailsComponent } from './component/job-details/job-details.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    RollPictureComponent,
    FootNavComponent,
    MineComponent,
    MessageComponent,
    IndexContentComponent,
    DetailsComponent,
    DetailsOfficeComponent,
    JobDetailsComponent,
    LoginComponent,
    ResumeComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
