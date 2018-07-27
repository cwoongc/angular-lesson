import { Component, Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';


@Directive({
    selector: '[a03OneDir]',
})
export class A03OneDirective { 

    // [a03OneDir]="'orange'" 처럼 속성바인딩으로 전달된 값은 @Input 데코레이터가 선언된 변수로 반드시 받아야 한다.
    @Input('a03OneDir') color: string = 'orange'; 

    elem: HTMLElement;

    //@Directive데코레이터 config객체 속성 host에서 '(mouseenter):'onMouseEnter()'와 동일
    @HostListener('mouseenter') onMouseEnter() : void {
        // console.log('Mouse Enter');
        this.renderer.setElementStyle(this.elem, 'color', this.color);
    }

    @HostListener('mouseleave') onMouseLeave() : void {
        // console.log('Mouse Leave');
        this.renderer.setElementStyle(this.elem, 'color','');
    }

    //지시자는 생성자를 통해 지시자 자신이 붙은 HTML 엘리먼트를 주입 받고, 또한 그 엘리먼트를 조작할수 있는 renderer도 주입받을 수 있다.
    constructor(private el: ElementRef, private renderer:Renderer) { 
        console.log(el);
        console.log(renderer);
        //지시자가 기술된 태그 참조 <div>, <p>
        this.elem = this.el.nativeElement;
    }
}



@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive</h3>
            </div>

            <div class="panel panel-body">
                <div [a03OneDir]="'orange'">Directive Attribute</div>
                <p a03OneDir='green'>Native Attribute</p>
            </div>
        </div>
    `
})
export class A03Component {

}
