import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <!-- 243 page 
                
                View(template)에서 변경하면 Controller(class)의 변수의 값도 변경되고
                Controller(class)의 변수의 값을 변경하면 View(template)의 값도 변경
                [(ngModel)]이라는 명령을 이용
                module에 FormsModule이 import되어야 한다.
                
                
                -->
                <h3>양방향 바인딩</h3>
            </div>
            
            <div class="panel-body">
                <input class="form-control" [(ngModel)]="name">
                <input class="form-control" [(ngModel)]="name">
                <!-- [(ngModel)] => ()와 [] 결합된 형태 : 이벤트 바인딩과 속성바인딩이 결합된상태 -->
                <input class="form-control" [value]="name" (input)="onChange($event)">
                <br>

                <select class="form-control" [(ngModel)]="name">
                    <option *ngFor="let item of students" [value]="item.name" >{{item.age}}</option>
                </select>

                <br>
                
                <span *ngFor="let item of students">
                    <input type="radio"  [value]="item.name">{{item.name}}
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';
    public students: {name:string, age:number, address:string}[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]

    onChange(evt: Event): void {

        let elem:HTMLInputElement = evt.target as HTMLInputElement; //이벤트 발생 주체 

        this.name = elem.value;
    }
}