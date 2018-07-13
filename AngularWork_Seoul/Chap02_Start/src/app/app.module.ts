import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { AComponent } from './A.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, AComponent,FooterComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
