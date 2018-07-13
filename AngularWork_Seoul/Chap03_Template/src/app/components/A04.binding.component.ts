import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <!-- 228 page -->
                <h4>이벤트 바인딩</h4>
                <div>알반 바인딩 : {{result}}</div><br>
                innerText 바인딩: <div [innerText]="result"></div><br>
                innerHTML 바인딩: <div [innerHTML]="result"></div><br>
                <button (click)="addText()">명령식</button>
                <button on-click="addText()">명령식</button>
            </div>

            <div class="panel-body">
                <h4>Class, Style Binding</h4>
                <div class="green">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="'green'">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div> <!-- 속성바인딩시 []=옆에 ""안엔 클래스 변수를 의미. 그래서 ''로 스트링 값으로 바꿔주면 먹는다 -->
                <div [attr.class]="greenColor" >3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class.green]="true" >4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <div>
                    <span [class.green]="check" > 5. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</span>
                    <input type="checkbox" [(ngModel)]="check" >Check / {{check}}
                </div>

                <div [ngClass]="greenColor" >6. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="'green bold'">7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="[greenColor, 'bold']">8. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="{green:check, bold:true}">9. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            </div>

            <div class="panel-body">
                <div [style.color]="greenColor" [style.fontStyle]="'italic'">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{'color': greenColor, fontStyle: 'italic'}"  >2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{'color': greenColor, 'font-style': 'italic'}">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div data-bind-ngStyle="{'color':greenColor, 'font-style':'italic'}">4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div> <!-- data가 붙은 속성은 웹표준 검사에서 예외로 처리되어 검사가 통과된다. -->
            </div>

        </div>
    `,
    styles: [`
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A04Component{
    public result: string;
    public name: string = 'HongGilDong';

    greenColor:string = 'green';
    check: boolean = true;

    addText():void {
        // sanitize =>  보안에 관련된 모듈
        this.result = '<b>동해물</b>과 백두산이...';
    }

    
}
