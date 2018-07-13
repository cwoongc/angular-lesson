import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <span>Parent Component Content</span>
            
            <a01ChildComponent></a01ChildComponent>
            
        </div>
    `,
    styles: [`
        div { border: 1px solid #666; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A01Component { }


