import { Component, Input } from '@angular/core';
import { Directive} from '@angular/core';


@Directive({
    //[] 없이 문자열로 지정 => 태그로 사용 (기능이 동작 안함))
    selector: '[a02OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02OneDirective { 
    @Input('a02OneDir') name:string = 'Hong';
    @Input() age :string;
    @Input() info: {address: string, tel: string} = {
        address: '',
        tel: ''
    }

    public onClick(): void {
        console.log('A02 One Directive: ' + this.name + '/ Age: ' + this.age);
        console.log(`info: ${this.info.address},${this.info.tel}`);
    }
}

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive Input</h3>
            </div>

            <div class="panel panel-body">
                <div [a02OneDir]="name" [age]="age">ONE</div>
                <div [a02OneDir]="'NolBu'">ONE Directive</div>
            </div>
            
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public age: number = 20;
    public info: {address: string, tel: string} = {
        address: 'Seoul',
        tel: '010-1111-2222'
    }
}