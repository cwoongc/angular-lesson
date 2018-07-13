import { Component , Input} from '@angular/core';

@Component({
    selector: 'a02One',
    template: `
        <div class="panel-body">
            <!-- 284 page -->
            <h4>Child Component</h4>

            <p>
                Normal: {{normal}}<br>
                Name: {{name}}<br>
                Object: {{obj?.tel}} <br>
                Array: {{ary[0]}} <br>

                Age:{{age*2}} <br>
                Company:{{company}} <br>
                Static: {{st}}
            </p>
        </div>
    `,
    styles: [`
        div { border: 1px solid blue; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02One { 
    //@Input(['전달받은 속성명']) [접근제한자] 변수명: 타입 [= 초기화];
    //전달받은 속성명과 변수명이 동일한 경우는 생략 가능

    //받는쪽에서 @Input()을 미리 선언해 두는것은 에러 아님. 전달 안해도 에러 아님.
    @Input() normal:string = 'ABC';
    @Input() name:string;
    @Input() obj: any;
    @Input('comp') company:string = 'SK';
    @Input() ary:string[];


    // @Input() age:number;
    // 부모 폼에서 수정하면 문자열로 넘어온다.
    private _age:number;

    //@Input()을 Getter, Setter로 받을 수 있다.
    @Input('age')
    public get age(): number { //| string{
        return this._age;
    }
    public set age(age:number) {// | string) {
        if(typeof age === 'string') {
            this._age = Number(age);
        } else {
            this._age=age;
        }
    }

    @Input() st:string;
    
}

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <div>
                <div class="col-md-2">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div class="col-md-2">
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div class="col-md-2">
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div class="col-md-2">
                    <label>Age</label>
                    <input type="text" class="form-control" [(ngModel)]="age">
                </div>
                <div class="col-md-2">
                    <label>Company</label>
                    <input type="text" class="form-control" [(ngModel)]="company">
                </div>
                <div class="col-md-2">
                    <label>Static</label>
                    <input type="text" class="form-control" [(ngModel)]="_static">
                </div>
            </div>

            <!-- 부모->자식 값전달은 속성 바인딩으로 전달한다.
            자식속성명 = "값" => 문자열 형태로 전달. 받는 쪽에서는 안 받아도 에러 아님
            [자식속성명] = "부모변수명" => 변수명 형태로 전달. 받는 쪽에서는 안 받으면 에러
            -->
            <a02One normal="normal" [name]="name" [obj]="obj" [comp]="company" [ary]="ary"
            [age]="age" 
            [st]="_static"
            ></a02One>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
//상하위 컴포넌트간 데이터 전송방법 학습
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

    public  _static: string = 'Static Property';
    // //static property를 A2Component식으로 참조하면 build 안되 주석처리
    // public static _static: string = 'Static Property';

    // get st():string {
    //     return A02Component._static;
    // }

    // set st(st: string) {
    //     A02Component._static = st;
    // }

    
}
