import { Component } from '@angular/core';

@Component({
    selector: 'a08OneComponent',
    template: `
        <div class="panel-body">
            <!-- 138 page -->
            <div class="first">First Child Component</div>
            <div>First Child Component</div>
        </div>
        <br>
        <br>
    `
})
export class A08OneComponent {

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel-heading">
            <h3>Host, Host deep, Host Context</h3>
        </div>

        <div class="panel-body">
            <span>This is A08 Component.</span>

            <br>

        </div>
    `
})
export class A08Component {

}