import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <div class="panel-body">
            <!-- 138 page -->
            <div class="first">First Child Component</div>
            <div cloass="second">First Child Component</div>
        </div>
        <br>
        <br>
    `,
    styles: [`
        :host {
            display: block;
            border: 1px solid red;
        }

        :host(:hover) {
            border: 2px solid blue;
        }

        :host(:active) {
            background-color: yellow;
        }

    `],
    // encapsulation: ViewEncapsulation.Native 
    encapsulation: ViewEncapsulation.Emulated //기본
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
        <a08One></a08One>
    `,
    styles: [`
        :host {
            display: block;
            border: 1px solid green;
        }

        :host(:hover) {
            border: 2px solid orange;
        }

        :host(:active) {
            background-color: gray;
        }

        :host .first {
            color:blue;
        }

        /* 상속 가능 */
        :host /deep/ .second {
            color:red;
        }

    `],
    encapsulation: ViewEncapsulation.Emulated //기본
    // encapsulation: ViewEncapsulation.Native //부모꺼가 없고 자식꺼만 남어, 쉐도우 돔이 샘김
    // encapsulation: ViewEncapsulation.None //일반적인 css로 적용되어 앵귤러식 css 문법이 적용안됨. 
    
})
export class A08Component {

}