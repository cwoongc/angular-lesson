// combine.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Combine Component</h1>
        <headerComp></headerComp>
        <br></br>
        <bComp></bComp>
        <br>
        <footerComp></footerComp>
    `
})
export class CombineComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
