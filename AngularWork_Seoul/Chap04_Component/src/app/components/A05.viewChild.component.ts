import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'a05One',
    template: `
        <div class="panel-body">
            <h4>A05 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
        </div> 
    `
})
export class A05OneComponent {
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): string {
        // console.log(name);
        return name;
    }
}

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel-heading">
            <h3>A05 ViewChild</h3>
        </div>

        <div class="panel-body">
            <h4>직접 one 참조</h4>
            Name: {{one.name}}<br>
            Age: {{one.age + 10}}<br>
            User: {{one.user.id}}<br>
            Fn: {{one.greet('Hi')}}

        </div>

        <div class="panel-body">
            <h4>자신의 변수 참조</h4>
            Name: {{name}}<br>
            Age: {{age + 10}}<br>
            User: {{data.id}}<br>
            Fn: {{fn('Hello')}}
        </div>

        <div #two></div>

        <!-- public one:A05OneComponent = new A05OneComponent() -->
        <a05One #one></a05One>
    `
})
export class A05Component {
    // #이 붙은 객체를 @ViewChild()로 참조
    @ViewChild('one') public one: A05OneComponent;

    @ViewChild('two') public two: ElementRef;

    public name : string;
    age: number;
    data: any;
    public fn:(s:string) => string;


    constructor() {
        // console.log(this.one); //undefined

    }

    ngOnInit(): void {
        // console.log(this.one); //ok       
        
        this.name = this.one.name;
        this.age = this.one.age;
        this.data = this.one.user;
        this.fn = this.one.greet;
        
        this.two.nativeElement.innerHTML = "<b>Div Inner HTML</b>"
    }

}
