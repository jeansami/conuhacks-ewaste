import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { StartedComponent } from './started/started.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SettingsComponent,
    SearchComponent,
    AboutComponent,
    StartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
