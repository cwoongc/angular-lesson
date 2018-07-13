
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'a01GrandComponent',
    template: `
    <div class="panel-body">
        <h3>Grand Component</h3>
        <span>Grand Component Content</span>
        
    </div>
`,
styles: [`
    div { border: 1px solid #666; padding:10px; margin:10px; width:70%; height:70%; color:green; }
`]
})
export class A01GrandComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
