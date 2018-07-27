import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryLazyComponent } from './luxuryLazy.component';

// Lazy Load 모듈 설정법
// 1. main 모듈에 import 하지 않는다.
// 2. main 모듈의 RouterModule의 기본 패스가 등록되어야 한다.
@NgModule({
    declarations: [LuxuryLazyComponent],
    imports: [ CommonModule,
        RouterModule.forChild([
            {path:'luxuryLazy', component: LuxuryLazyComponent}
        ])
    ],
    exports: [LuxuryLazyComponent],
    providers: [],
})
export class LazyModule {}