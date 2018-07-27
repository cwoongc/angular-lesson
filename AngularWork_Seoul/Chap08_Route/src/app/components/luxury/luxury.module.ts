import { NgModule } from "../../../../node_modules/@angular/core";
import { CommonModule } from "../../../../node_modules/@angular/common";
import {RouterModule} from '@angular/router';
import { LuxuryComponent } from "./luxury.component";

@NgModule({
    imports: [ CommonModule, 
        RouterModule.forChild([
                {path:'luxury', component: LuxuryComponent}
        ])
    ],
    declarations: [LuxuryComponent],
    exports: [LuxuryComponent],
    providers: []

})
export class LuxuryModule{}