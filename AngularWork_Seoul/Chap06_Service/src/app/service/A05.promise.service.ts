import { Injectable, OnInit } from '@angular/core';
import { ThreeVO } from './A03.ThreeVo.service';
import { ThreeDAO } from './A03.ThreeDAO.service';

@Injectable()
export class PromiseService {

    //DB 데이터를 조회한것을 mock으로 시뮬레이션
    private mockData: any = [
        {name: 'Hong', kor: 100, eng: 80, math: 70},
        {name: 'NolBu', kor:90, eng:80, math: 70},
        {name: 'HungBu', kor:80, eng:80, math: 70}
    ];



    getData(value:boolean): Promise<any> {
        return new Promise<any>((resolve,reject)=>{
            setTimeout(()=>{
                //http 서비스 구현부
                if(value) {
                    resolve(this.mockData);
                } else {
                    reject({
                       errorMsg: 'Error',
                       errorCode: 'ER01'
                    });
                }
            },3000)
        });
    }

    
}