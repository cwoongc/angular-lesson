// header.component.ts

import { Component } from "@angular/core";


@Component({
    selector: 'headerComp',
    //View
    template: `
        <h1>Header Component</h1>
        <div>
            Name: {{name}}<br>
            <button (click)="onChange()">Change</button>
        </div>
    `
})
//Controller
export class HeaderComponent {
    name:string = 'HongGilDong';

    onChange():void {
        this.name = 'NolBu';
    }
}