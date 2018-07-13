import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompModule } from './components/comp.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
