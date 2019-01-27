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
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SettingsComponent,
    SearchComponent,
    AboutComponent,
    StartedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputsModule,
    ButtonsModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }















































