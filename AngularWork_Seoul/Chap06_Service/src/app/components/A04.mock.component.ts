import { Component } from '@angular/core';
import { MockService } from '../service/A04.mock.service';


@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                
            </div>

            <div class="panel-body">
                Hong: {{mockData[0].name}} <br>
                <div *ngFor="let item of result">{{item}}</div>
            </div>
        </div>
    `
})
export class A04Component{
    mockData: Array<any>;
    result:string[] =[];

    constructor(private mock:MockService) {

    }

    ngOnInit() {
        this.mockData = this.mock.getData();
        this.result = this.mock.getResult();
    }
    
    
}