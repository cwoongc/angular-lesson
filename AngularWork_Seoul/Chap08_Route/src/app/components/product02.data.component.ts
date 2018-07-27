import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `<h1>Product Data</h1>
        <div>
            Params ID: {{id}}<br>
            Params NUM: {{num}}<br>

            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            Age: {{age}}<br>
            {{two?.isProd}} / {{two?.name}} / {{two?.age}}
        </div>
    `
})
export class ProductDataComponent{
    public id: string;
    public num: string;

    public isProd: string;
    public name: string;
    public age: number;

    two:{isProd:string,name:string,age:number} = {isProd:null,name:null,age:null};

    constructor(public ac: ActivatedRoute){console.log(ac);}

    ngOnInit() {
        this.ac.params
        .subscribe(
            (data:any)=>{
                this.id = data['id'];  //PathParam 
                this.num = data['num']; //PathParam
            },
            (error:any)=>{console.log(error);}
        )

        this.isProd = this.ac.snapshot.data[0]['isProd']; 

        this.ac.data
        .subscribe(
            (data:any) => {
                this.name = data[0]['name'];
                this.age = data[0]['age'];
            },
            (error:any)=> {
                console.log(error);
            }
        )

        this.ac.data
        .subscribe(
            (data:any) => {
                this.two['isProd'] = data[1]['isProd'];
                this.two['name'] = data[1]['name'];
                this.two['age'] = data[1]['age'];
            },
            (error:any)=> {
                console.log(error);
            }
        )
    }
    
}