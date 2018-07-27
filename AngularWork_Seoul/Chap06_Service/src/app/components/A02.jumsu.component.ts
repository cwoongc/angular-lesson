import { Component } from '@angular/core';
import { TwoVO } from '../service/A02.TwoVo.service';
import { TwoDAO } from '../service/A02.TwoDAO.service';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                HongGilDong: <br>
                {{hong}}
                <br>
                NolBu: <br>
                {{nonBu}}
                <br>
            </div>
        </div>
    `,
    providers:[TwoVO, TwoDAO]
})
export class A02Component{

    hong:string;
    nonBu:string;

    constructor(private vo: TwoVO, private dao: TwoDAO) {

    }

    ngOnInit() {
        this.vo.name = "HongGilDong";
        this.vo.kor = 100;
        this.vo.eng = 80;

        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo);
        this.hong = this.dao.display(this.vo);

        this.vo.name = "NolBu";
        this.vo.kor = 90;
        this.vo.eng = 80;

        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo);
        this.nonBu = this.dao.display(this.vo);
    }



}