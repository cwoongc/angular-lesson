import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'; //View단에서 쓰는 Form 모듈들


@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-heading">
            <h3>Model Base Form</h3>
        </div>
        <div class="panel-body">
            Form value : {{fg.value |json }}<br>
            Form valid : {{fg.valid}}<br>
            <br>
            fName: {{fg.get('name').get('fName').value}}
            lName: {{getLastName()}} <br>
            SSN: {{fg.get('ssn').value}}
        </div>
        <div class="panel-body">
            <form [formGroup]="fg" (ngSubmit)="onSubmit(fg.value)">
           
                <div formGroupName="name">
                    <label>UserName:</label>
                    <input type="text" class="form-control" formControlName="fName">
                    <input type="text" class="form-control" formControlName="lName">
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control" formControlName="ssn">
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control" formControlName="pw">
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" formControlName="cpw">
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control">
                        <option></option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A02Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';
    

    //Form을 관리할 객체 선언, <form [formGroup]="fg">
    //Model 에서 관리하는 Form은 FormsModule이 가지고 있지 않고
    //ReactiveFormsModule이 관리한다.
    public fg: FormGroup;

    constructor() {
        //FormGroup =>객체 형태로 요소를 정의
        //FormArray =>배열 형태로 요소를 정의
        // {}=>[]로 변경후 Key를 삭제한다.
        // 참조는 index 번호를 문자열 형태로 참조한다. 0번째 => "0"
        this.fg = new FormGroup({
            // form 요소에 할당. formControlName="fName"
            //계층 구조는 DOM구조와 맞추어 주어야 한다.
            // formGroupName = "name"

            name: new FormGroup({
                'fName': new FormControl('GilDong'),
                lName: new FormControl('Hong'),
            }),
            
            ssn: new FormControl(''),
            pw: new FormControl(''),
            cpw: new FormControl(''),
            depart: new FormControl('')
        })
        


    }

    getLastName(): string {
        return this.fg.get('name').get('lName').value;
    }

    onSubmit(data: any): void {
        console.log(data);
    }

}
