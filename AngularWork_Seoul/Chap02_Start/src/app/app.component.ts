import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <headerComp></headerComp>
  <br>
  <aComp></aComp>
  <br>
  <footer></footer>`,
})
export class AppComponent  { name = 'Angular'; }
