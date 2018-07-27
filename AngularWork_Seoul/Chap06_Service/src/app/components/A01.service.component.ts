import { Component, OnInit } from '@angular/core';
import { HelloService } from '../service/A01.Hello.service';
import { HiService } from '../service/A01.Hi.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Service</h3>
            </div>

            <div class="panel-body">
                Hello Service: {{greet}}<br>
                Hi Service: {{greetHi}}
            </div>
        </div>
    `,
    //1. 객체 생성. Spring이라면 XML 파일에 BIN등록과 같은 역할
    //2. providers 속성은 현재 component와 module 어느 곳에 기술해도 상관없음
    // component에 기술 => 현재 컴포넌트만 해당 서비스를 사용
    // module에 기술 => 모듈의 declarations에 기술된 모든 컴포넌트가 사용 가능
    // providers: [HelloService] // 모듈에 정의
})
export class A01Component implements OnInit{

    greet: string;
    greetHi: string;
    
    //객체 선언
    private hiService : HiService;



    //2. 주입
    constructor(private hello:HelloService) {
        console.log(hello);

        this.hiService = new HiService(); //주입이 아닌 직접 생성
    }

    //3.사용
    ngOnInit() {
        this.greet = this.hello.getGreet("NolBu!!");
        this.greetHi = this.hiService.getGreet('HungBu!!!');
    }
}
