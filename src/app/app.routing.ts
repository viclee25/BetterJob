import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { MineComponent } from "./mine/mine.component";
import { MessageComponent } from "./message/message.component";
import { DetailsComponent } from './details/details.component';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'message', component: MessageComponent },
    { path: 'mine', component: MineComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'login', component: LoginComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
