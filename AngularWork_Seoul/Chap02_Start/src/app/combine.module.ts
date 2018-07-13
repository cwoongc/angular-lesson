import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CombineComponent } from './combine.component';
import { HeaderComponent } from './header.component';
import { BComponent } from './B.component';
import { FooterComponent } from './footer.component';


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ CombineComponent, HeaderComponent, BComponent, FooterComponent ],
    bootstrap:    [ CombineComponent ]
})
export class CombineModule {  }