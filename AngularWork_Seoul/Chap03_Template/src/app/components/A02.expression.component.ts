import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Name: {{person.name}}</h3>
            </div>
            
            <div class="panel-body">
            <!-- 바인딩 식에 연산자는 사용 가능 -->
                <div>일반적인 연산: 1 + 2 = {{1+2}} </div>
                <div>좋아하는 과일의 개수: {{person.fruit.length}}</div>
                <div>과일의 개수 * 100 : {{person.fruit.length * 100}} </div>
                <div>Are you Hong? {{person.name === 'Hong'}}</div>
                <div>Are you Hong? {{(person.name ==='Hong')?'홍길동':'누군지 모름'}}</div>
                <div>과일 개수가 4개보다 많은가?   {{person.fruit.length > 4}}</div>
            </div>
	    </div>
    `
})
export class A02Component{

    person = {
        name: 'Hong',
        fruit: ['apple','lemon','banana']
    }

}
