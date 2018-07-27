import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'a07One',
    template:``
})
export class A07OneComponent{}

@Component({
  
    selector: 'a07Component',
    template: `
        <div class="panel-heading">
            <h3>Template</h3>
        </div>
        <div class="panel-body">
            <!-- 이 하위 컴포넌트에 template을 로드 -->
            <a07One #one></a07One>
        </div>
        <div class="panel-body">
            <button (click)="onLoad()">Load</button>
        </div>
        <ng-template #temp>
            <div>Template Element</div>
        </ng-template>
    `,
})
export class A07Component  { 
    @ViewChild('temp') temp:TemplateRef<HTMLElement>;
    @ViewChild('one', {read: ViewContainerRef})  //강제 타입 캐스팅
    vcr: ViewContainerRef;

    onLoad():void {
        this.vcr.createEmbeddedView(this.temp);
    }
}