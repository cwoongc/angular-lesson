import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'a03One',
    template: `
        <div class="panel-body">
            <!-- 288 page -->
            Name: <br>
            <button class="btn btn-primary" (click)="sendName()">Send Name</button>
            <button class="btn btn-primary" (click)="sendObject()">Send Object</button>
        </div>
    `
})
export class A03OneComponent {
    //하위->상위 데이타 전달시엔 이벤트 기반으로 만든다.
    //1. Custom Event를 생성
    @Output() 
    private sendNameEvent: EventEmitter<string> = new EventEmitter();

    @Output() 
    private sendObjEvent: EventEmitter<any> = new EventEmitter();

    // 2. 생성한 이벤트를 발생 => EventName.emit(전달할 데이터 값)
    public sendName(): void {
        this.sendNameEvent.emit(this.name);
    }

    sendObject(): void {
        let data: any = {
            name:this.name,
            obj:this.obj,
            ary:this.ary
        }
        this.sendObjEvent.emit(data);
    }
    


    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

    public _static: string = 'Static Property';

}


@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-body">
            <h3>EventEmitter</h3>
            
            <div>
            name : {{this.name}}<br>
            tel : {{this.data?.obj?.tel}}<br>

            </div>

            <!-- 3. 하위 컴퍼넌트에서 발생한 이벤트를 상위 컴포넌트에서 ()로잡아서 상위컴포넌트 내부의 이벤트 핸들러 메서드와 맵핑-->
            <a03One (sendNameEvent)="getName($event)" (sendObjEvent)="getObject($event)"></a03One>
        </div>
    `
})
export class A03Component {

    name:string;
    data:any;

    getName(evt:any):void {
        console.log(evt);
        this.name = evt;
    }

    getObject(evt:any):void {
        console.log(evt);
        this.data = evt;
    }

}
