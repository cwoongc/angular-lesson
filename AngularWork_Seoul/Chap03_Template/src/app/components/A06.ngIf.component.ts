import { Component } from '@angular/core';
import { StudentType } from '../customType/StudentType';

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>ngIf / ngSwitch / ngFor</h3>
            </div>

            <div class="panel-body">
                <!-- 239 page -->
                <h4>ngIf</h4>
                <select [(ngModel)]="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <!-- *ngIf: 엘리먼트(돔)를 조건부 생성/삭제 -->
                <span *ngIf="gender === 'male' ">Male</span>
                <span *ngIf=" gender === 'female' ">Female</span>

                <!-- 숨기기 -->
                <span [hidden]=" gender !== 'male' ">Male</span>
                <span [hidden]=" gender !== 'female' ">Female</span>
            </div>

            <div class="panel-body">
                <h4>ngSwitch</h4>
                <button (click)="grade ='admin'" >Admin</button>
                <button (click)="grade='member'" >Member</button>
                <button (click)="grade='guest'">Guest</button>
                <br>
                <div [ngSwitch]="grade">
                    <span *ngSwitchCase="'admin'">Admin</span>
                    <span *ngSwitchCase="'member'" >Member</span>
                    <span *ngSwitchCase="'guest'"> Guest</span>
                    <span *ngSwitchDefault>회원등급을 선택해 주세요.</span>
                </div>
            </div>

            <div class="panel-body">
                <h4>ngFor</h4>
                <table class="table">
                    <!-- for(let item of studetns) { -->
                    <tr *ngFor="let item of students; let i = index">
                        <td>{{i+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.kor}}</td>
                        <td>{{item.eng}}</td>
                    </tr>
                    <!-- } -->


                    <!-- ngFor의 index에 대한 빑트인 평가 변수를 실습 -->
                    <tr [ngClass]="{bg:l}" 
                     *ngFor="let item of students;
                        let i = index;
                        let f = first;
                        let l = last;
                        let m = middle;
                        let o = odd;
                        let e = even;
                    ">
                        <td>{{i}}</td>
                        <td>{{item.name}}</td>
                        <td>{{f}}</td>
                        <td>{{l}}</td>
                        <td>{{m}}</td>
                        <td>{{o}}</td>
                        <td>{{e}}</td>
                    </tr>
                    
                </table>
            </div>


        </div>
    `,
    styles: [`
        .bg {background-color:lightgreen;} 
    `]

})
export class A06Component{
    public gender:string = 'null';
    public grade: string= 'admin';
    public students: StudentType[] = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]

    
    
}
