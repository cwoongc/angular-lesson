import { Component, ViewChild, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';

@Component({
    
    selector: 'a06Component',
    template: `
        <div class="panel-heading">
            <h3>Template</h3>
        </div>
        <div class="panel-body">
            <button (click)="onLoadAll()">ALL</button>
            <button (click)="onRemoveAll()">REMOVE</button>
        </div>
        <div class="panel-body">
            <button (click)="onLoad(temp1)">One</button>
            <button (click)="onLoad(temp2)">Two</button>
            <button (click)="onRemove()">Remove</button>
        </div>

        <!-- Angular2 버전에서는 template으로 사용되었음 -->
        <ng-template #temp1 let-name="name" let-num="age">
            <div class="panel-heading">
                <h4>Template 1</h4>
            </div>
            <div class="panel-body">
                Message: {{message}}<br>
                Name {{name}}: <br>
                Age: {{num}} <br>
            </div>
        </ng-template>

        <ng-template #temp2>
            <div class="panel-heading">
                <h4>Template 2</h4>
            </div>
            <div class="panel-body">
                Message: {{message}}<br>
                Name: <br>
                Age: <br>
            </div>
        </ng-template>
    `,
})
export class A06Component  { 
    //Template에 대한 참조 변수 선언
    @ViewChild('temp1') temp1: TemplateRef<HTMLElement>;
    @ViewChild('temp2') temp2: TemplateRef<HTMLElement>;


    message:string ='A06 Main Component'
    view:boolean = true;

    //Template을 화면에 표시할 객체 - Template을 조작할 조작 객체
    constructor(private vcr: ViewContainerRef) {
    }

    onLoadAll():void {
        if(this.view) {
            this.vcr.createEmbeddedView(this.temp1);
            this.vcr.createEmbeddedView(this.temp2);

            this.view = false;
        }
    }

    onRemoveAll(): void {
        this.vcr.clear();
        this.view = true;
    }

    //vcr에 template을 하나씩 로드
    //vcr에 template이 로드 되어있는지를 참조하기 위한 레퍼런스 객체
    private evr: EmbeddedViewRef<HTMLElement>;

    onLoad(temp:TemplateRef<HTMLElement>): void {
        if(this.evr) {
            //vcr에 객체가 있다면 삭제
            this.evr.destroy();

            //Tempate에 전달할 값은 객체 형태로 지정한다.
            //template에서 변수 선언을 해야 함. let-name=""
            let data:any = {
                name: 'HongGilDong',
                age:20
            }

            //그리고 로드
            this.evr = this.vcr.createEmbeddedView(temp, data);
        }
    }

    onRemove(): void {
        if(this.evr) {
            //vcr에 객체가 있다면 삭제
            this.evr.destroy();
        }
    }
}