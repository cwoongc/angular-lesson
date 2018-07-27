import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-heading">
            <h3>Template Base Form</h3>
        </div>
        <div class="panel-body">
            Form value: {{myForm.value | json}} <br>
            Form valid: {{myForm.valid }} <br>
        </div>
        <div class="panel-body">
            <!-- 템플릿에서 태그를 삽입하면 생성되는 돔객체를 컴포넌트에서 참조하는 방법으로 돔객체에 #엘리어스 로 태깅하고
                컴포넌트에서 ViewChild 데코레이터(어노테이션)를 이용해서 멤버변수로 참조하는 방식를 이용하는데,
                역으로 이때 생성되는 객체를 미리 angular가 생성해둔 ngForm으로 맵핑하면 ngForm이 제공하는 
                value, valid 등의 폼 활용을 위해 기본 바인딩되 제공되는 속성값들을 사용할수있다.
                -->
            <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
                <div>
                    <label>UserName: {{firstName}} / {{lastName.value}}</label>
                    <!-- 
                        1.ngModel은 module에 FormsModule이 import 되어 있어야 한다. 
                        2. <form> 태그 내부에서는  name속성과 항상 함게 사용되어야 한다 (key가됨)
                    -->
                    
                    <input type="text" class="form-control" name="fName" [(ngModel)]="firstName">
                    <!--
                        1.ngModel => 폼엘리먼트에 ngModel이 붙으면 angular 가 관리하는 Form요소로 등록하겠다는 의미
                        2.#lastName="ngModel" => 폼 요소 1개만 #이름 으로 객체화
                    -->
                    <input type="text" class="form-control" required name="lName" ngModel  #lastName="ngModel">
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control" name="ssn" ngModel>
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control" name="pw" ngModel>
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" name="cpw" ngModel>
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control">
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                <!-- 속성바인딩 : [속성명]="컴포넌트변수명" -->
                <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid" >Submit</button>
            </form>
        </div>
    `
})
export class A01Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';


    onSubmit(data: any): void {
        console.log(data);
    }
    
}
