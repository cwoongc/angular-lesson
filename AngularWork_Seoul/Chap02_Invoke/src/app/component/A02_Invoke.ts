// A01_Invoke.ts

import { Component,  } from '@angular/core';

@Component({
    selector: 'a02Invoke',
    template: `
        <div class="panel-heading">
            <h1>A02 Invoke</h1>
        </div>

        <div class="panel-body">
            Qty: <input type="number" class="form-control" [(ngModel)]="qty"><br>
            Cost: <input type="number" class="form-control" [(ngModel)]="cost"><br>
            County:{{inCurr}}
            <select class="form-control" [(ngModel)]="inCurr">
                <!-- for(let item of currencies) -->
                <option *ngFor="let item of currencies">{{item}}</option>
            </select>
            <br>
            Total: <span *ngFor="let item of currencies">{{onTotal(item) | currency: item }} &nbsp;</span>
        </div>
        
    `,
    styles: [``]
})
export class A02InvokeComponent {
    qty:number = 3;
    cost:number = 5;
    inCurr: string = 'USD';
    currencies: string[] = ['USD', 'EUR', 'CNY']
    rate : {[key:string]:number} =  {
        'USD':1,
        'EUR':1.25,
        'CNY':6.25
    }

    constructor() { }

    onTotal(outCurr:string):number {
        return this.convertRate(this.qty * this.cost, outCurr, this.inCurr);
    }

    convertRate(amount:number, outCurr: string, inCurr:string): number {
        return amount * this.rate[outCurr] / this.rate[inCurr];
    }

}
