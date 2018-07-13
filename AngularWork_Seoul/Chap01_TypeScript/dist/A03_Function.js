"use strict";
// A03_Function.ts
var A03Function;
(function (A03Function) {
    console.log('----------------function parameter, return type declare-----------------');
    //ts는 function에도 parameter type과 return type을 선언할 수 있다.
    //반환타입은 union 타입 (|를 통한 복수의 반환타입 선언)으로 javascript의 return; 기본 반환형인 undefiend를 씀
    //반환타입을 아예 생략하면 컴파일러가 알아서 반환타입을 확인하여 지정한다.
    function calcTax(status, amount, person) {
        if (status === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (status === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        // return;
        return -1;
    }
    console.log(calcTax('NY', 5000, 3));
    console.log('----------------function literal-----------------');
    // 함수 리터럴 (변수에 함수를 할당 받는것. 변수이름이 호이스팅 되고 나중에 함수 할당이 이루어지므로 이전 영역에서 호출 불가)
    // console.log(calcTax2('NY',5000,3)); //불가
    var calcTax2 = function calcTax(status, amount, person) {
        if (status === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (status === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        // return;
        return -1;
    };
    console.log(calcTax2('NY', 5000, 3));
    console.log('----------------default-----------------');
    //함수의 매개변수의 기본값 할당 가능 , ES2015
    //기본값이 있는 매개변수는 호출때 생략이 가능 => 기본값으로 대체됨
    //기본값이 있는 매개변수는 기본값이 없는 매개변수보다 뒤에 와야 한다.
    function calcTax3(amount, person, status) {
        if (person === void 0) { person = 2; }
        if (status === void 0) { status = 'NY'; }
        if (status === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (status === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        // return;
        return -1;
    }
    console.log(calcTax3(5000, 3, 'NJ'));
    console.log(calcTax3(5000, 3));
    console.log(calcTax3(5000));
    console.log('');
    console.log('----------------생략 파라메터-----------------');
    //함수의 매개변수 생략가능 => ES2015
    //생략 가능한 매개변수가 있으면 매개변수는 호출때 생략이 가능 = > 매개변수에 ?를 할당
    //생략 가능한 매개변수는 기본값이 없는 매개변수보다 뒤에 와야 한다.
    function calcTax4(amount, person, status) {
        if (person === void 0) { person = 2; }
        status = status || 'NY'; //차라리 status보다 default를 쓰면 되는 경우다.
        if (status === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (status === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        // return;
        return -1;
    }
    console.log(calcTax4(5000, 3, 'NJ'));
    console.log(calcTax4(5000, 3));
    console.log(calcTax4(5000));
    console.log('');
})(A03Function || (A03Function = {}));
//# sourceMappingURL=A03_Function.js.map