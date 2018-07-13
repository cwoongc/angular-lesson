// A01_Invoke.ts

import { Component  } from '@angular/core';
import { InvokeService } from '../service/invoke.service';

@Component({
    selector: 'a03Invoke',
    template: `
        <div class="panel-heading">
            <h1>A03 Invoke</h1>
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
    styles: [`
    h1 {color : green;}
    `],
    providers: [InvokeService] //생성자에서 주입받는 injectable
})
export class A03InvokeComponent {
    qty:number = 3;
    cost:number = 5;
    inCurr: string = 'USD';
    // currencies: string[] = ['USD', 'EUR', 'CNY']
    currencies: string[] = this.invoke.currencies;
    // rate : {[key:string]:number} =  {
    //     'USD':1,
    //     'EUR':1.25,
    //     'CNY':6.25
    // }
    rate : {[key:string]:number} = this.invoke.rate;

    //생성자에 파라메터 선언시, 접근제한자를 지정하면 이는 클래스의 멤버변수 선언과 함께 파라메터를 동시에 주는것과 같다.
    //즉 같은 이름으로 맴버변수를 생성한다.
    constructor(
        private invoke:InvokeService
    ) { }

    onTotal(outCurr:string):number {
        // return this.convertRate(this.qty * this.cost, outCurr, this.inCurr);
        return this.invoke.convertRate(this.qty * this.cost, outCurr, this.inCurr);
    }

    // convertRate(amount:number, outCurr: string, inCurr:string): number {
    //     return amount * this.rate[outCurr] / this.rate[inCurr];
    // }

}
