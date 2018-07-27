import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Custom Pipe</h3>

                1. {{'aBcDe'|bigSmall:'big'}}<br>
                2. {{'aBcDe'|bigSmall:'small'}}<br>
            </div>

            <div class="panel-body">
		        <h4>Abbr</h4>
                <div>
                    1.{{str|abbr}}<br>
                    2.{{str|abbr:10}}<br>
                    3.{{str|abbr:15:'***'}}<br>
                    4.{{12345678901234567890|abbr:10}}<br>
                </div>
                <br>


                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number</label>
                    <select class="form-control" name="num" [(ngModel)]="num">
                        <option *ngFor="let item of obj | arrayCounter">{{item}}</option>
                    </select>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | limitTo : num">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kor}}</td>
                            <td>{{item.eng}}</td>
                        </tr>
                    </table>
                </div>
                <br>

            </div>
        </div>
    `
})
export class A02Component{
    public str: string = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세';

    num: number = 3;


    public obj: Array<any> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ]

}
