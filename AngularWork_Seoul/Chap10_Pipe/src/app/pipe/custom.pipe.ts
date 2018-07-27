import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bigSmall'})
export class BigSmallPipe implements PipeTransform {
    
    //{{money|currency:'CNY':'symbol-narrow':'1.1'}}
    //currency => BigSmallPipe 클래스의 transform 메소드를 호출
    //money => transform 메소드의 첫번째 매개변수
    //'CNY' => transform 메소드의 두번째 매개변수
    //'symbol-narrow' => transform 메소드의 세번째 매겨변수
    //결과(화면에 표시되는값) => transform 메소드의 리턴값

    //{{'aBcDe'|bigSmall}}
    transform(data: string, option: string): string {
        // return "신성진";

        if(typeof data !== 'string') return data;


        //Guard: option이 없으면 어떻게 처리?
        if(typeof option !== 'string' || option === undefined) return data;

        if(option === 'big') {
            return data.toUpperCase();
        } else if(option ==='small') {
            return data.toLowerCase();
        } else {
            return data;
        }
        
    }
}


//Abbr
@Pipe({name: 'abbr'})
export class AbbrPipe implements PipeTransform {
    transform(data: string, size: number = 20, symbol: string = '...'): string {
        //size = (size) ? size : 20;
        // size = size || 20;

        if(typeof data !== 'string') return data;
        
        if(data.length < size) return data;
        else {
            return data.substr(0,size - symbol.length) + symbol;
        }
    }
}


//limitTo
@Pipe({name: 'limitTo'})
export class LimitToPipe implements PipeTransform {
    transform(data: Array<any>, size:number = data.length): Array<any> {

        if(data.constructor !== Array) return data;

        // 걸러지는 데이터만 담을 배열을 선언
        let result: Array<any> = [];

        // 조건에 따라 거르는 작업
        for(let i = 0; i<data.length; i++) {
            if(i < size) {
                result.push(data[i]);
            } else {
                break;
            }
        }

        // 걸러진 데이터를 담은 배열을 리턴
        return result;
        
    }
}


//배열의 크기만큼 0부터 수를 구하는 필터

@Pipe({name: 'arrayCounter'})
export class ArrayCounterPipe implements PipeTransform {
    transform(data: Array<any>): Array<number> {

        if(!(data instanceof Array)) return data;

        let result : Array<number> = [];

        for(let i=0;i<=data.length;i++) {
            result.push(i);
        }


        return result;



        
    }
}