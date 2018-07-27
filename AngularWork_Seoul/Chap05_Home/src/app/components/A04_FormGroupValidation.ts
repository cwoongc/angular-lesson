import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormArrayName, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-heading">
            <h3>5. Reactive Base Form</h3>
        </div>
        <div class="panel-body">
            Form value : {{fg.value |json }}<br>
            Form valid : {{fg.valid}}<br>
            <br>
            fName value: {{fg.get('name').get('0').value}}<br>
            fName valid: {{fg.get('name').get('0').valid}}<br>
            fName errors: {{fg.get('name').get('0').errors | json}}<br>
            fName hasError('required'): {{fg.get('name').get('0').hasError('required')}}<br>
            fName hasError('minlength'): {{fg.get('name').get('0').hasError('minlength')}}<br>

            
        </div>
        <div class="panel-body">
            <form  [formGroup]="fg" (ngSubmit)="onSubmit(fg.value)">
                <div formArrayName="name">
                    <label>UserName: </label>
                    <div>
                        <input type="text" class="form-control" formControlName="0"
                        required minlength="3" maxlength="10">

                        <div *ngIf="fg.get('name').get('0').hasError('required')">
                            이름은 필수 항목입니다.
                        </div>
                        <div *ngIf="fg.get('name').get('0').hasError('minlength')">
                            이름은 3글자 이상입니다.(체크는 소문자 minlength)
                        </div>
                        <div *ngIf="fg.get('name').get('0').hasError('maxlength')">
                            이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                        </div>

                        <input type="text" class="form-control" formControlName="1">
                        <div *ngIf="fg.get('name').get('1').touched && fg.get('name').get('1').invalid">
                            <div [hidden]="!fg.get('name').get('0').hasError('required')">
                                이름은 필수 항목입니다.
                            </div>
                            <div [hidden]="!fg.get('name').get('0').hasError('minlength')">
                                이름은 3글자 이상입니다.(체크는 소문자 minlength)
                            </div>
                            <div [hidden]="!fg.get('name').get('0').hasError('maxlength')">
                                이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                            </div>
                        </div>
                    </div>
                </div>
                <br>

                <div>
                    <label>SSN: </label>
                    <input type="text" class="form-control" formControlName="ssn">
                    <div>
                        SSN은 필수 항목입니다.
                    </div>
                </div>
                <br>

                <div>
                    <label>Password: </label>
                    <input type="text" class="form-control" formControlName="pw">
                    <div *ngIf="fg.get('pw').hasError('required')">
                        패스워드는 필수 항목입니다.
                    </div>
                    <div *ngIf="fg.get('pw').hasError('pattern')">
                        패스워드 패턴이 틀립니다.
                    </div>
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" formControlName="repw">
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control" formControlName="dept">
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>

                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>

        <div class="panel-body">
            All: {{fg.value | json}}<br>
            Bind: {{getName()}}<br>
        </div>
    `
})
export class A04Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';

    public fg: FormGroup;

    ngOnInit() {
        this.fg = new FormGroup({
            name: new FormArray([
                new FormControl(''),
                new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)])
            ]),
            ssn: new FormControl(''),
            pw: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z][\w]+/)]),
            repw: new FormControl(''),
            dept: new FormControl('')
        })
    }

    public getName(): string{
        return this.fg.get('name').get('0').value
    }
    
    public onSubmit(data: any): void{
        console.log(data);
    }
}
