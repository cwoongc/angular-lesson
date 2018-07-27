import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <h1>Product Details for Product: {{id}}</h1>
    `,
    styles: ['.product {background: cyan}; display: block; ']
})
export class ProductParamComponent{

    id:string;

    constructor(private ac: ActivatedRoute) {
        // console.log(ac);
    }

    ngOnInit() {
        // this.id = this.ac.snapshot.params['id']

        this.ac.params
        .subscribe(
            (data:any)=>{
                this.id = data.id;
            },
            (error:any)=>{
                console.log(error);
            }
        )
    }

}