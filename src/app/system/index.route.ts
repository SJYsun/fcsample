import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
export const Routers: Routes = [{
    path: 'home',
    component: HomeComponent
}, {
    path: 'error',//错误
    component: ErrorComponent
}, {
    path: 'forgot',//忘记密码
    component: ForgotComponent,
}, {
    path: 'lockscreen',//锁屏
    component: LockscreenComponent
}, {
    path: 'main',//main
    component: MainComponent
}, {
    path: 'notfound',//找不到
    component: NotfoundComponent
}, {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
}];
