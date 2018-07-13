
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-heading">
            <!-- 247 page -->
            <h3>Observable Event Demo</h3>
        </div>

        <div class="panel-body">
            <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput">
        </div>
    `,
})
export class A07Component implements OnInit  { 
    searchInput: FormControl = new FormControl('');

    constructor() {
        console.log(this.searchInput.valueChanges);
        
    }

    ngOnInit() {
        //발행자 => Observable 객체에 포장해서 전송
        this.searchInput.valueChanges
        //가공 후 재 발행
        .map(
            (data:string)=> {
                return data.toUpperCase();
            }
        )
        //배열로 변경
        .map( (data:string)=> data.split('') )
        .map( (data:string[])=> data.reverse())
        //문자열로 다시 조립
        .map( (data:string[]) => data.join('-'))
        //수신자
        .subscribe(
            //성공
            (data: string)=> {
                console.log(data);
            },
            //실패
            (error: string)=>{
                console.log(error);
            }
        )
    }

}