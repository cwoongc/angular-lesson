import { Component } from '@angular/core';
import { PromiseService } from '../service/A05.promise.service';


@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                
            </div>

            <div class="panel-body">
                Hong: <br>
                Jimea: <br>
            </div>
        </div>
    `
})
export class A05Component{

    constructor(private promise:PromiseService) {
        
    }

    ngOnInit() {
        this.promise.getData(true) //java 의 future 같은 promise가 반환되면
        .then( //java future의 get은 결과 반환이지만, promise의 then은 arg로 결과값을 받는 function (resolve, reject) 2개를 받아 처리한다.
            (data:any)=> {
                console.log(data);
            },
            (error:any)=> {
                console.log(error.errorCode + '/' + error.errorMsg);
            }
        )

    }
    
}
