import { Component } from '@angular/core';
import { ProfitService } from '../service/A03.profit.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>HTTP Service</h3>
            </div>
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr *ngFor="let item of profitData">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary" (click)="getData()">Load</button>
            </div>

            <div class="panel-body">
                {{products | json}}
            </div>
        
        </div>
    `,
    providers: [ ProfitService]
})
export class A03Component  {

    profitData: string[];

    constructor(private profit:ProfitService) {
        
    }

    public getData(): void {
        this.profit.getProfit() //observable을 반환
        .subscribe((data:string[])=>{ //구독, 구독은 넘겨주는 익명function의 arg로 결과 데이터가 들어오고
            this.profitData = data; //이를 컴포넌트의 멤버로 받는게 일반적인 패턴
        },
        (error:string)=>{
            console.log(error);
        });
    }
    
}