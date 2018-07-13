import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'TemplateComp',
    template: `
        <div class="panel-heading">
        <h1>TemplateComponent</h1>
        </div>

        <div class="panel-body">
            <a08Component></a08Component>
            <a07Component></a07Component>
            <a06Component></a06Component>
            <a05Component></a05Component>
            <a04Component></a04Component>
            <a03Component></a03Component>
            <a02Component></a02Component>
            <a01Component></a01Component>
        </div>
    `
})
export class TemplateComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
