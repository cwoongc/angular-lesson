// A02_type.ts

namespace A01Type {
    console.log('------------------ var -----------------')

    //var은 변수 이름을 제선언 할수도 있으며, any타입 쓸경우 다이내믹하게 타입변경이 가능(할당값의 타입에 따라)
    var name: any = 'Hong';
    var name: any = 'NolBu';
    console.log(typeof name, name);

    name = 10;
    console.log(typeof name, name);


    if(true){
        var str: any = 'Scope Var';
    }

    console.log(str);
    console.log('------------------ let -----------------');
    //let는 선언된 변수는 한번밖에 제 선언 못함
    let age: any = 'NolBu';

    //let 변수는 블럭 스쿱을 가짐
    if(true) {
        let su : any = 10;
        console.log(su);
    }
    // {} scope를 갖는다.
    // console.log(su);



    console.log('------------------ type -----------------');
    // TypeScript는 모든 변수(매개변수 포함), 함수의 리턴ㄹ값에 타입이 붙는다
    // string, number, boolean, Symbol, undefined
    let str1: string = 'HonGilDong';

    // 안되는 할당 예 (컴파일러 오류 발생)
    // str1 = 10;
    // str1 = true;
    // str1 = new Date();
    // str1 = undefined;

    // Typescript는 value 도 타입을 가진다. (할당시 타입자동설정)
    let num1 = 10; //값이 number라 변수가 number 타입으로 지정된다.


    console.log(`${typeof str1} / ${str1} - ${typeof num1} / ${num1}`);

    console.log('');
    console.log('------------------ any type -----------------');

    //어떤 타입의 값이라도 다 대입가능
    //Javascript의 호환성 문제로 존재..
    let anyType: any = 10;
    anyType = 'string';
    anyType = new Date();

    //타입이 존재하지 않고 대입값이 undefined, null도 할당가능. 이경우 선언한건 아니기 때문에 동적 변경은 가능(any란 소리)
    let unAny = undefined;
    let nullAny = null;

    console.log(`${typeof unAny} / ${typeof nullAny}`);

    unAny = 10;
    console.log(`${typeof unAny} / ${unAny}`);


    // let으로 undefined, null type으로 선언하면 undefined와 null만 대입가능. 마찬가지로 동적 변경 불가능.
    let unType: undefined;
    let nullType: null;

    console.log('------------------ array -----------------');

    //javascript
    let ary: any = [10,20,30,'40',50,new Date()];

    //typescript
    let ary1: number[]= [10,20,30];
    let ary2: Array<String> = ['one','two','three']; //generic 사용방식

    //for
    for(let i=0;i<ary1.length;i++) {
        console.log(`ary[]: ${ary[i]}`);
    }


    // for-in => es5
    for(let i in ary1) {
        console.log(`ary[]: ${ary[i]}`);
    }

    // for of => es6
    let index = 0;
    for(let e of ary1) {
        console.log(`${index} / ${e}`);
        index++;
    }


    console.log('------------------ Object -----------------');
    let obj1: {name:string, age:number, hire:Date, getInfo: (greet:string)=>string} = {
        name: 'HongGilDong',
        age: 20,
        hire: new Date(),
        getInfo: function(greet:string): string {
            let ret:string = `${this.name}, ${this.age}, ${this.hire.toLocaleDateString()}`;
            console.log(ret);
            return ret;
        }
    }

    console.log(obj1.name, obj1.getInfo('hi'));
    

    console.log('------------------ Interface -----------------')
    //Object 타입을 interface로 정의 가능
    interface ObjType {
        name:string;
        age: number;
        hire: Date;
        getInfo:(greet:string) => string;
    }
    let obj2: ObjType = {
        name: 'HongGilDong',
        age: 20,
        hire: new Date(),
        getInfo: function(greet:string): string {
            let ret:string = `${this.name}, ${this.age}, ${this.hire.toLocaleDateString()}`;
            console.log(ret);
            return ret;
        }
    }

    console.log(obj2);

    //Object key-value type 선언법
    let obj3: { [key:string]:number} = {
        'one': 10,
        'two': 11,
        'three': 100
    }

    obj3['four'] = 101;
    console.log(obj3);

    // 객체 
    let today = new Date();
    console.log(today.toLocaleDateString());



}