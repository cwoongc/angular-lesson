import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { A01Component } from './components/A01.service.component';
import { HelloService } from './service/A01.Hello.service';
import { A02Component } from './components/A02.jumsu.component';
import { A03Component } from './components/A03.jumsu.component';
import { A04Component } from './components/A04.mock.component';
import { ThreeDAO } from './service/A03.ThreeDAO.service';
import { MockService } from './service/A04.mock.service';
import { A05Component } from './components/A05.promise.component';
import { PromiseService } from './service/A05.promise.service';


@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component, A03Component, A04Component, A05Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelloService, ThreeDAO, MockService, PromiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
