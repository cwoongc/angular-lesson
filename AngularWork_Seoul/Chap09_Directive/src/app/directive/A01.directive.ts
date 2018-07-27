import { Directive } from '@angular/core';

@Directive({
    //[] 없이 문자열로 지정 => 태그로 사용 (기능이 동작 안함))
    selector: 'a01OneDir',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01OneDirective { 
    public onClick(): void {
        console.log('A01 One Directive clicked');
    }
}




@Directive({
    //[] 없이 문자열로 지정 => 태그로 사용 (기능이 동작 안함))
    selector: 'a01TwoDir',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01TwoDirective { 
    public onClick(): void {
        console.log('A01 Two Directive clicked');
    }
}



@Directive({
    //[] 없이 문자열로 지정 => 태그로 사용 (기능이 동작 안함))
    selector: 'a01ThreeDir',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01ThreeDirective { 
    public onClick(): void {
        console.log('A01 Three Directive clicked');
    }
}