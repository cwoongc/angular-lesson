// A01_Invoke.ts

import { Component,  } from '@angular/core';

@Component({
    selector: 'a01Invoke',
    template: `
        <div class="panel-heading">
            <h1>A01 Invoke</h1>
        </div>

        <div class="panel-body">
            Qty: <input type="number" class="form-control" [(ngModel)]="qty"><br>
            Cost: <input type="number" class="form-control" [(ngModel)]="cost"><br>
            <br>
            Total: <span>{{qty * cost}}</span>
        </div>
        
    `,
    styles: [``]
})
export class A01InvokeComponent {
    qty:number = 3;
    cost:number = 5;
    constructor() { }

}
