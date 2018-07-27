import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive</h3>
            </div>

            <div class="panel panel-body">
                <span a01OneDir>One</span><br>
                <a01OneDir>One</a01OneDir><br>
            </div>

            <div class="panel panel-body">
                <div a01TwoDir>TWO Directive</div>

                <p a01TwoDir>TWO Directive</p>
                <!-- 이렇게는 사용불가 . [] 방식은 @Input유무에 따라 다름
                <div [a01TwoDir]>TWO Directive</a>
                <a01TwoDir></a01TwoDir>
                -->
                <div a01ThreeDir></div>
            </div>
        </div>
    `
})
export class A01Component {

}


