import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductDetailComponent } from "./product.component";
import { ProductParamComponent } from "./product01.param.component";
import { ProductDataComponent } from "./product02.data.component";
import { ProductArgsComponent } from "./product03.args.component";
import { ProductChildComponent } from "./product04.childMain.component";
import { DescriptionComponent } from "./childComponent/description.component";
import { SellerComponent } from "./childComponent/seller.component";
import { ProductActivateComponent } from "./product05.active.component";

//Guard
import {LoginService} from "../service/Login.service"
import { LogoutService } from "../service/Logout.service";
import { SubHomeComponent } from "./company/subHome.component";
import { AboutComponent } from "./company/about.component";
import { ContentComponent } from "./company/content.component";
import { NotFoundComponent } from "./notFound.component";

// RouterModule.forChild : 하위 모듈에 라우터를 로딩시키고 싶을때
export const appRouter = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'product', component:ProductDetailComponent},

    //주소줄의 path를 이용한 데이터 전송
    //:id에는 임의의 문자나 숫자가 와야 한다. 기술한 값이 id에 대입되는 값이 된다
    //ProductParamComponent에서 id 변수명으로 기술된 값을 참조해 사용가능하다. (라우팅된 컴포넌트에서 @PathParam을 받아 쓸수있다고 생각할수있다.)
    
    //ex: productParam/:id/data/:num => localhost/productParam/임의의값/data/임의의값
    // {path: 'productParam/:id/data/:num', component:ProductParamComponent}
    {path: 'productParam/:id', component:ProductParamComponent},


    //고정 데이터 전송
    {path: 'productData/:num/:id', component: ProductDataComponent,
        data: [
            {isProd: true, name: 'HongGilDong',age: 30},
            {isProd: false, name:'NolBu', age:50}
        ]
    },

    //주소줄의 파라미터로 데이터 전송 (queryParams)
    { path: 'productArgs', component: ProductArgsComponent},

    //하위 컴포넌트에 존재하는 라우터 아울렛의 라우팅 정보도 함께 기술
    {path: 'productChild', component:ProductChildComponent,
        children: [
            {path: 'desc', component: DescriptionComponent},
            {path: 'seller/:id', component: SellerComponent}
        ]

    },

    //Guard 구현 (i.e. 인증여부로 링크로 인한 진입을 허용, 블허할때)
    //canActivate => 지정한 서비스(Service)가 true를 리턴해야 해당 컴포넌트를 로드
    //canDeactivate => 지정한 서비스가 true를 리턴해야 해당 컴포넌트에서 다른 컴포넌트로 이동 가능
    //children을 활용하면 하위 컴포넌트에 존재하는 라우러 아울렛의 라우팅 정보에도 똑같은 가드가 사용가능하다.
    {
        path: 'productActive', component: ProductActivateComponent,
        canActivate:[LoginService],
        canDeactivate:[LogoutService]
    },

    //router-outlet 이름과 매칭되는 곳에만 로드될 수 있다.
    {path:'sub', component:SubHomeComponent, outlet:'primary'}, //기본 라우터아울렛 명 'primary'
    {path:'about', component:AboutComponent, outlet:'main'},
    {path:'content', component:ContentComponent, outlet:'footer'},


    //하위 모듈에 패스를 설정. 이건 여기서는 아무것도 안함. 하위 모듈에서 모두 처리.

    //Lazy로드에 대한 패스를 설정한다.
    //링크 설정은 lazy/모듈에서 정의한 패스명
    //앵귤러 6에서는 하기 절대패스가 오류가난다. 6에서는 상대패스로 해주어야만 한다.
    {path:'lazy', loadChildren: 'app/components/luxuryLazy/lazy.module#LazyModule'},
    // {path:'lazy', loadChildren: './components/luxuryLazy/lazy.module#LazyModule'},

    //맨 하단에 위치해야 한다.
    //위에 패스와 다른 경로가 주소줄에 기술되면 이 컴퍼넌트가 로드된다.
    { path: '**', component:NotFoundComponent}


])