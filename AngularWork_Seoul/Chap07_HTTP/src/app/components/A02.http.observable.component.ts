
import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'a02Component',
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
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="panel-body">
                {{products | json}}
            </div>
        
        </div>
    `,
})
export class A02Component  { 

    profitData: [{name:string, category: string, price: number, expiry: number }]; 

    //HTTP 서비스는 module에 HttpModule이 올라와야 한다.
    //HTTP는 내장 서비스라 providers에 선언하지 않아도 사용가능.
    constructor(private http: Http) {
        
    }

    ngOnInit() {
        //발행자
        this.http.get('assets/resources/productData.json')
        //가공 후 재 발행
        .map((data:Response)=>{
            return data.json();
        })
        //수신자
        .subscribe(
            (data:[{name:string, category: string, price: number, expiry: number }])=>{
                this.profitData = data;
            },
            (error:any)=>{console.log(error);}
        );
        
    }
   
}