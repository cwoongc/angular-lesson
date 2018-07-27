import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { A01Component } from './components/A01.http.promise.component';
import { A02Component } from './components/A02.http.observable.component';
import { A03Component } from './components/A03.http.service.component';
import { A04Component } from './components/A04.jsonp.component';
import { A05Component } from './components/A05.jsonp.component';
import { A06Component } from './components/A06.profit.component';


@NgModule({
  declarations: [
    AppComponent,A01Component,A02Component,A03Component, A04Component, A05Component, A06Component
  ],
  imports: [
    BrowserModule,HttpModule, JsonpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
