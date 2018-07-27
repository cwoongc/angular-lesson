import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.pipe.component';
import { A02Component } from './components/A02.custom.component';
import { BigSmallPipe, AbbrPipe, LimitToPipe, ArrayCounterPipe } from './pipe/custom.pipe';


@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component,
    BigSmallPipe, AbbrPipe, LimitToPipe, ArrayCounterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
