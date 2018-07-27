import { Component } from '@angular/core';
import { URLSearchParams, RequestOptionsArgs, Jsonp, Response } from '@angular/http';
import { WikiService } from '../service/A05.wiki.service';

@Component({
    selector: 'a05Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control" [(ngModel)]="keyword">
            </label>
            <button class="btn btn-primary" (click)="getData()">Search</button>
        </div>
        <div class="panel-body" *ngFor="let item of wikiData">
            <b><a [href]="item.url"> {{item.title}}</a></b><br>
            {{item.content}}
            
        </div>
    </div>
    `,
    providers: [WikiService ]
})
export class A05Component  { 

    wikiData:Array<any>;

    //검색어
    keyword: string = 'angular';

    constructor(private wiki:WikiService) {}   
    
    ngOnInit() {
        this.wiki.getWiki(this.keyword)
        .subscribe(
            (data:Array<any>)=>{
                this.wikiData = data;
            },
            (error:any)=> {
                console.log(error);
            }
        )
    }


    
    
}