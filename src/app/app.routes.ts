import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./Admin/dashboard/dashboard.component";
import {DashMoniteurComponent} from "./Moniteur/dash-moniteur/dash-moniteur.component";
import {HomeComponent} from "./Candidat/home/home.component";
import {RegisterComponent} from "./Admin/register/register.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'moniteur/dashMoniteur', component: DashMoniteurComponent },
  { path: 'candidat/home', component: HomeComponent },
  { path: 'admin/register', component: RegisterComponent },

];
