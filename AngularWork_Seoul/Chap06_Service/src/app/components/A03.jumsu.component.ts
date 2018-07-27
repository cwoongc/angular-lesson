import { Component } from '@angular/core';
import { ThreeDAO } from '../service/A03.ThreeDAO.service';
import { ThreeVO } from '../service/A03.ThreeVo.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                <div *ngFor="let item of result">{{item}}</div>
            </div>
        </div>
    `,
    providers : [ThreeDAO]
})
export class A03Component{

    result: string[] = [];

    constructor(private dao:ThreeDAO) {
        
    }

    ngOnInit() {
        let hong: ThreeVO = new ThreeVO("Hong",100,90,80);
        let nolbu: ThreeVO = new ThreeVO("NolBu",100,90,80);
        let hungbu: ThreeVO = new ThreeVO("HungBu",100,90,80);
        let kim: ThreeVO = new ThreeVO("Kim",100,90);

        let student: Array<ThreeVO> = [hong, nolbu, hungbu,kim];

        for(let item of student) {
            this.dao.getTotal(item);
            if(item.math === undefined) {
                this.dao.getAvg(item,2);
            } else {
                this.dao.getAvg(item, 3);
            }
            // this.dao.display(item);

            this.result.push(this.dao.display(item));
            
            console.log(item.toString());
        }
    }




}