import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app',
    template: `
        <div class="panel-heading">
            <h3>Router</h3>
        </div>

        <div class="panel-body">
            <a routerLink="">HOME</a> | 
            <a routerLink="home">HOME</a> | 
            <a [routerLink]="['product']">PRODUCT</a> |
            <br>

            <a [routerLink]="['productParam/10']">PRODUCT PARAM 10</a> | 
            <a>PRODUCT PARAM 20</a> | 
            <a [routerLink]="['productData/20/kim']">PRODUCT DATA</a> | 
            <a [routerLink]="['productArgs']" [queryParams]="{isProd:true, name:'HongGilDong', age:30}">PRODUCT ARGS</a> | 
            <a>PRODUCT ARGS</a> | 
            <br>

            <a [routerLink]="['productChild']">Child</a>
            <a [routerLink]="['productActive']" >Activate</a> | 
            <br>

            <!-- 멀티 라우터-아울렛의 이름과 라우팅 path를 맵핑한 객체를 이용해서 라우터링크 클릭시 해당 모든 라우터-아울렛에 맵핑된 path에 해당하는 컴포넌트 표시하는 법 -->
            <a [routerLink]="[{outlets: {primary: 'sub', main: 'about', footer:'content'}}]">All View</a> | 
            <a [routerLink]="[{outlets: {primary: 'sub', main: 'about', footer:null}}]">Two View</a> | 
            <a [routerLink]="[{outlets: {primary: 'sub', main: null, footer:null}}]">One View</a> | 
            <br>

            <a [routerLink]="['luxury']">Luxury</a> | 

            <a [routerLink]="['lazy/luxuryLazy']">Luxury Lazy</a> | 
            <br>
            
            <button (click)="simplePath('home')">HOME</button>
            <button (click)="simplePath('productParam/10')" >PRODUCT</button>
            <button (click)="simpleParam('productParam','10')" >PRODUCT</button>
            <button (click)="simpleArgs('productArgs',{queryParams:{isProd:true, name:'HongGilDong', age:30}})">PARAM</button>
        </div>

        <div class="panel-body">
            <!-- router-outlet : 라우터 링크, 라우터를 통해 지정된 컴포넌트가 노출되는 영역지정-->
            <router-outlet></router-outlet> <!-- primary -->
        </div>
        <hr>
        <div class="panel-body">
            <!-- router-outlet : 라우터 링크, 라우터를 통해 지정된 컴포넌트가 노출되는 영역지정-->
            <router-outlet name="main"></router-outlet>
        </div>
        <hr>

        <div class="panel-body">
            <!-- router-outlet : 라우터 링크, 라우터를 통해 지정된 컴포넌트가 노출되는 영역지정-->
            <router-outlet name="footer"></router-outlet>
        </div>
    `,
})
export class AppComponent  { 

    constructor(private router: Router) {
        
    }

    simplePath(url:string):void {
        this.router.navigate([url]);
    }

    simpleParam(url:string, path:string): void {
        this.router.navigate([url,path])
    }

    simpleArgs(url:string,args:any):void {
        this.router.navigate([url], args);
    }
}

