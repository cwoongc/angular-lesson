import { Component } from '@angular/core';

@Component({
    selector: 'a07One',
    template: `
        <div class="panel-body">
            <!-- 312 page -->
            <h4>A07 One</h4>

        </div>
    `
})
export class A07OneComponent {
    public age: number = 50;

    constructor(){
        console.log(`A07 One Constructor => ${this.age}`);
    }

    ngOnInit() {
        console.log(`A07 One ngOnInit => ${this.age}`);
    }


    //콘트롤러 변수 바인딩 끝나면
    ngAfterContentInit() {
        console.log(`A07 One ngAfterContentInit => ${this.age}`);
    }

    //컨텐츠 바뀌었는지 순환
    ngAfterContentChecked() {
        console.log(`A07 One ngAfterContentChecked => ${this.age}`);
    }

    //컨텐츠 바인딩이 끝나고 나면 뷰를 만들기 위한 준비 실행
    ngAfterViewInit() {
        console.log(`A07 One ngAfterViewInit => ${this.age}`);
    }

    //뷰가 바뀌었는지 순환
    ngAfterViewChecked() {
        console.log(`A07 One ngAfterViewChecked => ${this.age}`);
    }



}

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-body">
            <h3>A07 Component</h3>
            <input type="number" class="form-control" [(ngModel)]="age">
        </div>

        <a07One></a07One>
        
    `
})
export class A07Component {
    public age: number = 20;

    constructor(){
        console.log(`A07 Parent Constructor => ${this.age}`);
    }

    ngOnInit() {
        console.log(`A07 Parent ngOnInit => ${this.age}`);
    }


    //콘트롤러 변수 바인딩 끝나면
    ngAfterContentInit() {
        console.log(`A07 Parent ngAfterContentInit => ${this.age}`);
    }

    //컨텐츠 바뀌었는지 순환
    ngAfterContentChecked() {
        console.log(`A07 Parent ngAfterContentChecked => ${this.age}`);
    }

    //컨텐츠 바인딩이 끝나고 나면 뷰를 만들기 위한 준비 실행
    ngAfterViewInit() {
        console.log(`A07 Parent ngAfterViewInit => ${this.age}`);
    }

    //뷰가 바뀌었는지 순환
    ngAfterViewChecked() {
        console.log(`A07 Parent ngAfterViewChecked => ${this.age}`);
    }

    
    
}