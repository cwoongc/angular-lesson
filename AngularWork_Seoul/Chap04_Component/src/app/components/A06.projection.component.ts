import { Component } from '@angular/core';

@Component({
    selector: 'a06One',
    template: `
        <div class="panel-body">
            <!-- 303 page -->
            <h3>A06 One Component</h3>
            <!-- 부모쪽에서 class로 지정하고 자식쪽에서 select로 가져온다 -->
            <ng-content select=".header"></ng-content>
            <hr>
            <ng-content select=".footer"></ng-content>
        </div>

        
    `
})
export class A06OneComponent {

}

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel-body">
            <h3>A06 Component</h3>

        </div>
        <a06One>
            <!-- 자식 컴포넌트에서 ng-content에의해 보여질 엘리먼트들 -->
            <div class="header">Header Content</div>
            <div class="footer">Footer Content</div>
        </a06One>
    `
})
export class A06Component {

}