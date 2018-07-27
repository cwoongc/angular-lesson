
import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';


// import 'rxjs/add/observable/toPromise';
import 'rxjs/add/operator/toPromise'; //observerable 을 promise로 변환해주는 것

@Component({
    selector: 'a01Component',
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
export class A01Component  { 

    profitData: [{name:string, category: string, price: number, expiry: number }]; 

    //HTTP 서비스는 module에 HttpModule이 올라와야 한다.
    //HTTP는 내장 서비스라 providers에 선언하지 않아도 사용가능.
    constructor(private http: Http) {
        
    }

    ngOnInit() {
        this.http.get('assets/resources/productData.json')
        .toPromise()
        .then(
            (data:Response)=>{
                console.log(
                    // data.text
                    data.json()
                );
                this.profitData = data.json();
                
            },
            (error:any)=>{console.log(error);}
        ).catch(
            (error:any)=> {console.log(error);}
        )
    }
   
}