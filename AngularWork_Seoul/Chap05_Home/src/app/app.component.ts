import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template:`
    <div class="panel-heading">
      <h1>Chap05 Form</h1>
    </div>
    <div class="panel-body">
    <h1>a04</h1>
      <a04Component></a04Component>
      <h1>a03</h1>
      <a03Component></a03Component>
      <h1>a02</h1>
      <a02Component></a02Component>
      <h1>a01</h1>
      <a01Component></a01Component>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
