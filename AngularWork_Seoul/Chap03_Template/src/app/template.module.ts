import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TemplateComponent } from './components/template.component';
import { A01Component } from './components/A01.template.component';
import { A02Component } from './components/A02.expression.component';
import { A03Component } from './components/A03.binding.component';
import { A04Component } from './components/A04.binding.component';
import { A05Component } from './components/A05.ngModel.component';
import { A06Component } from './components/A06.ngIf.component';
import { A07Component } from './components/A07.observable.component';
import { A08Component } from './components/A08.weather.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
    declarations: [ TemplateComponent, A01Component, A02Component, A03Component, A04Component
        , A05Component, A06Component, A07Component, A08Component ],
    bootstrap:    [ 
        TemplateComponent
     ]
})
export class TemplateModule {  }