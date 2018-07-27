import { Injectable, OnInit } from '@angular/core';
import { ThreeVO } from './A03.ThreeVo.service';
import { ThreeDAO } from './A03.ThreeDAO.service';

@Injectable()
export class MockService {

    //DB 데이터를 조회한것을 mock으로 시뮬레이션
    private mockData: any = [
        {name: 'Hong', kor: 100, eng: 80, math: 70},
        {name: 'NolBu', kor:90, eng:80, math: 70},
        {name: 'HungBu', kor:80, eng:80, math: 70}
    ];

    private result:string[] = [];

    //선언은 module의 providers: []에서 선언 함
    constructor(private dao:ThreeDAO) {
        let hong = new ThreeVO(this.mockData[0].name, this.mockData[0].kor, this.mockData[0].eng, this.mockData[0].math);
        let nolbu = new ThreeVO(this.mockData[1].name, this.mockData[1].kor, this.mockData[1].eng, this.mockData[1].math);
        let hungbu = new ThreeVO(this.mockData[2].name, this.mockData[2].kor, this.mockData[2].eng, this.mockData[2].math);
    
        let students: Array<ThreeVO> = [hong, nolbu, hungbu];

        for(let item of students) {
            this.dao.getTotal(item);
            this.dao.getAvg(item, 3);
            console.log(this.dao.display(item));
            this.result.push(this.dao.display(item));
        }

    }

    getData(): Array<any> {
        return this.mockData;
    }

    getResult():string[] {
        return this.result;
    }

    // //가공
    // ngOnInit() {
    //     let hong = new ThreeVO(this.mockData[0].name, this.mockData[0].kor, this.mockData[0].eng, this.mockData[0].math);
    //     let nolbu = new ThreeVO(this.mockData[1].name, this.mockData[1].kor, this.mockData[1].eng, this.mockData[1].math);
    //     let hungbu = new ThreeVO(this.mockData[2].name, this.mockData[2].kor, this.mockData[2].eng, this.mockData[2].math);
    
    //     let students: Array<ThreeVO> = [hong, nolbu, hungbu];

    //     for(let item of students) {
    //         this.dao.getTotal(item);
    //         this.dao.getAvg(item, 3);
    //         console.log(this.dao.display(item));
    //         this.result.push(this.dao.display(item));
    //     }
    // }

}