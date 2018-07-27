import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-args',
    template: `<h1>Product Argument</h1>
        <div>
            Age: {{age}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            
        </div>
    `
})
export class ProductArgsComponent{
    public age: string;
    public isProd: boolean;
    public name: string;

    constructor(public ac: ActivatedRoute){}

    ngOnInit() {
        this.isProd =  this.ac.snapshot.queryParams['isProd']; //ac.snapshot의 속성은 객체
        
        this.ac.queryParams //그냥 ac의 속성은 observable이고 ac.snapshot의 속성은 객체이다.
        .subscribe(
            (data:any)=>{
                this.name = data['name'];
                this.age = data['age'];
            },
            (error:any)=> {
                console.log(error);
            }
        )
    }
}


