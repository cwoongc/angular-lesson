//invoke.service.ts


import { Injectable } from '@angular/core';

@Injectable()
export class InvokeService {
    currencies: string[] = ['USD', 'EUR', 'CNY']
    rate : {[key:string]:number} =  {
        'USD':1,
        'EUR':1.25,
        'CNY':6.25
    }
    convertRate(amount:number, outCurr: string, inCurr:string): number {
        return amount * this.rate[outCurr] / this.rate[inCurr];
    }
}