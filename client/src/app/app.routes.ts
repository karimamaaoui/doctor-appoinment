import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [

    {path:'',component: LandingPageComponent},
    {path:'login',component: LoginComponent},

    {path:'register',component: RegisterComponent},
    {path:'home',component: HomeComponent},
    
];
