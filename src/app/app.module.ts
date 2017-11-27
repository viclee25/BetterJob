import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { RollPictureComponent } from './roll-picture/roll-picture.component';
import { FootNavComponent } from './foot-nav/foot-nav.component';
import { MineComponent } from './mine/mine.component';
import { MessageComponent } from './message/message.component';
import { CONST_ROUTING } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    RollPictureComponent,
    FootNavComponent,
    MineComponent,
    MessageComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
