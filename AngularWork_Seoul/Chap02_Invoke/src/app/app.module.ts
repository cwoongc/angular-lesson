import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { A01InvokeComponent } from './component/A01_Invoke';
import { A02InvokeComponent } from './component/A02_Invoke';
import { A03InvokeComponent } from './component/A03_Invoke';



@NgModule({
  declarations: [
    AppComponent, A01InvokeComponent, A02InvokeComponent, A03InvokeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, A01InvokeComponent, A02InvokeComponent, A03InvokeComponent]
})
export class AppModule { }
