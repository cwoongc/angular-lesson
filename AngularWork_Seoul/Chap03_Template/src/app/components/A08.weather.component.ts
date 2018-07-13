
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'a08Component',
    template: `
    <div class="panel-heading">
        <!-- 259 page -->
        <h3>Observable Event Demo</h3>
    </div>

    <div class="panel-body">
        <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput"><br>
        Temperature: {{temperature}}
    </div>
    `,
})
export class A08Component  { 
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    public searchInput: FormControl = new FormControl();
    public temperature: string;

    constructor(public http: Http) {}

    ngOnInit() {
        this.searchInput.valueChanges
        .debounceTime(1000)
        .switchMap(
            (data:string)=>{
                let res = this.http.get(this.baseWeatherURL+data+this.urlSuffix);
                console.log(res);
                return res;
            }
        )
        // body에 붙은 전체 데이터를 json 형태로 리턴
        .map ( (data:any) => data.json() )
        // 전체 데이터에서 main 항목만 꺼내온것
        .map ( (data: any) => data['main'])
        .subscribe(
            (data:any)=>{
                // console.log(data);
                this.temperature = `Temp: ${data['temp']}, Humidity: ${data['humidity']}`
            },
            (error:any)=>{
                console.log(error)
            }
        );
    }
    
}