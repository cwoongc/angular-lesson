import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { A01Component } from './components/A01.component';
import { A01OneDirective, A01TwoDirective, A01ThreeDirective } from './directive/A01.directive';
import { A02Component, A02OneDirective } from './components/A02.input.component';
import { A03Component, A03OneDirective } from './components/A03.hostListener.component';
import { A04Component, A04OneDirective } from './components/A04.renderer.component';
import { A05Component, A05OneDirective } from './components/A05.renderer.component';
import { A06Component } from './components/A06.template.component';
import { A07Component, A07OneComponent } from './components/A07.template.component';


@NgModule({
  declarations: [
    AppComponent, A01Component, A01OneDirective, A01TwoDirective, A01ThreeDirective, A02OneDirective,
    A02Component, A03Component, A03OneDirective, A04Component, A04OneDirective, A05Component, A05OneDirective,
    A06Component, A07Component, A07OneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
