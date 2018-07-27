import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="panel-boyd">
            <h1>Product Child Component</h1>
            <div>
                <p>
                    <a routerLink="desc">Description</a> | 
                    <a routerLink="seller/10">Seller Info</a>
                </p>
                <router-outlet></router-outlet>
                
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}