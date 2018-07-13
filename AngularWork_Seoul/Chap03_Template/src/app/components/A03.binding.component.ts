import { Component }          from '@angular/core';

@Component({
    selector: 'a03Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <!-- 226 page -->
                <h4>일반 바인딩</h4>
                Name:{{name}} , kor:{{kor}} , Eng:{{eng}} <br>
                Total:{{total}} , Avg: {{(kor+eng)/2}} <br>
                ID:{{hong.id}} , Address:{{hong.address}} 
            </div>

            <div class="panel-body">
                <h4>Safe Navigation Operator</h4>
                <!-- 빌드시에 에러 떨어짐 -->
                <!--없는 기본형 변수 참조(표시안됨-에러없음) Age: {{age}} <br>--> <!-- 빌드위해 주석처리 -->
                <!-- 객체는 없거나 또는 선언만 하고 값이 없는 경우도 다 에러로 표시됨 -->
                <!--없는 객체형 변수 참조(?없으면 에러) user.name: {{user?.name}}--> <!-- 빌드위해 주석처리 -->
            </div>

            <div class="panel-body">
                <!-- 231 page -->
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control" value="{{name}}"><br>
                Name: <input type="text" class="form-control" [value]="name"><br> <!-- 앵귤러 속성 바인딩 -->
                Add: <input type="text" class="form-control" [attr.value]="name" ><br> <!-- 리얼돔 속성 바인딩 -->
                Age: <input type="text" class="form-control"><br>
            </div>

            <div class="panel-body">
                <!-- 234 page 
                    JavaScript => event
                    Angular => $event
                
                -->
                Name: <input type="text" class="form-control" [value]="name" (input)="onChange($event)">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }

    onChange(evt: Event): void {
        // this.name = ?;
        console.log(evt.target);

        let elem:HTMLInputElement = <HTMLInputElement> evt.target; //이벤트 발생 주체 

        this.name = elem.value;
    }
    
}