import { AppComponent }  from './components/app.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';

//라우터 상수 임포트
import { appRouter } from './components/app.router';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { ProductActivateComponent } from './components/product05.active.component';
import { LoginService } from './service/Login.service';
import { LogoutService } from './service/Logout.service';
import { SubHomeComponent } from './components/company/subHome.component';
import { AboutComponent } from './components/company/about.component';
import { ContentComponent } from './components/company/content.component';
import { LuxuryModule } from './components/luxury/luxury.module';
import { NotFoundComponent } from './components/notFound.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule,
    
        // // RouterModule.forChild : 하위 모듈에 라우터를 로딩시키고 싶을때
        // RouterModule.forRoot([
        //     {path: '', component: HomeComponent},
        //     {path:'home', component: HomeComponent},
        //     {path: 'product', component:ProductDetailComponent}
        // ])
        RouterModule, appRouter, LuxuryModule
    ],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent, ProductParamComponent, ProductDataComponent, ProductArgsComponent, ProductChildComponent,SellerComponent, DescriptionComponent,
    ProductActivateComponent, SubHomeComponent, AboutComponent, ContentComponent,
    NotFoundComponent ],
    bootstrap:    [ AppComponent ],
    providers: [LoginService, LogoutService]
})
export class AppModule {  }