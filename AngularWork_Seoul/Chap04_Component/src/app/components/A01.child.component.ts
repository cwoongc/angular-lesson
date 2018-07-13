
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'a01ChildComponent',
    template: `
    <div class="panel-body">
        <h3>Child Component</h3>
        <span>Child Component Content</span>
        <a01GrandComponent></a01GrandComponent>
    </div>
`,
styles: [`
    div { border: 1px solid #666; padding:10px; margin:10px; width:70%; height:70%; }
`]
})
export class A01ChildComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
