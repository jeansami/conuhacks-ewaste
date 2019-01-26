import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { StartedComponent } from './started/started.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'started', component: StartedComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





