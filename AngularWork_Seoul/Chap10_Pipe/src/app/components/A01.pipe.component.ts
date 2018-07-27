import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Date / Currency / JSON</h3>
            </div>

            <div class="panel-body">
                <h4>Date Pipe</h4>
                    1. {{today}} - {{today|date}} - {{today|date:'yyyy-MM-dd hh:mm:ss a EEEE'}}<br>
                    2. {{todayUTC}} - {{todayUTC|date}} - {{todayUTC|date:'yy-M-d h:m:s '}}<br>
                    3. {{todayISO}} - {{todayISO|date}} - {{todayISO|date:'y-MM-dd hh:mm:ss'}}<br>
                <br>

                <h4>Date Pipe 단축형</h4>
                1.Date: {{today|date:'fullDate'}} - {{today|date:'longDate'}}- {{today|date:'mediumDate'}}-{{today|date:'shortDate'}}<br>
                2.Time: {{today|date:'mediumTime'}} - {{today|date:'shortTime'}}<br>
                3.All: {{today|date:'medium'}} - {{today|date:'short'}}<br>

            <div class="panel-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>
                1. {{money|currency}}<br>
                2. {{money|currency:'KRW'}}<br>
                <!-- Angular4에서 쓰던 방식 -->
                3. {{money|currency:'KRW':true}}<br>
                <!-- Angular5에서 쓰는 방식 -->
                4. {{money|currency:'CNY':'code'}}<br>
                4. {{money|currency:'CNY':'symbol'}}<br>
                4. {{money|currency:'CNY':'symbol-narrow'}}<br>
                
                5. {{money|currency:'CNY':'symbol-narrow':'1.1'}}<br>
                5. {{money|currency:'CNY':'symbol-narrow':'1.3'}}<br>
                5. {{money|currency:'CNY':'symbol-narrow':'3.3'}}<br>
                5. {{money|currency:'CNY':'symbol-narrow':'10.3'}}<br>
                
            </div>

            <div class="panel-body">
                <h4>JSON</h4>
                {{obj}}<br>
                {{obj|json}}<br>
            </div>
        </div>
    `,
})
export class A01Component{
    public today: Date = new Date();       // 날짜 형식
    public todayUTC: number = Date.now();  // 숫자 형식 1970.1.1 00:00:00의 mile sec
    public todayISO: string = this.today.toISOString();    // 문자 형태

    public money: number = 12345.6789;

    public obj: any = {
        name: 'Hong',
        age: 20,
        ary: ['One','Two'],
        info: {
            id: 10,
            add: 'Seoul'
        }
    }
}
