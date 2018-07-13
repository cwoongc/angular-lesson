"use strict";
var A04Arrow;
(function (A04Arrow) {
    function onAdd(x, y) {
        var result = x + y;
        return result;
    }
    //리터럴 방식으로 정의
    //function 을 생략하고 ()=>{} 형태로 사용
    var onMin = function (x, y) {
        var result = x - y;
        return result;
    };
    //Arrow함수의 내용이 딱 1줄이고 그값이 return인 경우
    //return과 {}가 생략된다.
    var onMulti = function (x, y) { return x * y; };
    //매개변수가 1개인 경우는 () 생략이 가능(javascript)
    // let onDiv = x => x + 10;
    var onDiv = function (x) { return x + 10; };
    console.log(onAdd(10, 20) + ", " + onMin(20, 10) + ", " + onMulti(2, 5) + ", " + onDiv(20));
    //명령이 한줄인데 값이 아닌경우 실행만 함
    var onTest = function (x) { return console.log(x); };
    // this의 참조가 다르다
    var TodayClass = /** @class */ (function () {
        function TodayClass() {
            this.today = new Date();
        }
        TodayClass.prototype.getTime = function () {
            var _this = this; //getTime의 소속객체인 TodayClass 객체가 _this에 저장됨
            setTimeout(function () {
                console.log(_this.today.toLocaleString());
                // console.log(this.today.toLocaleString());
            }, 1000);
        };
        return TodayClass;
    }());
    var NowClass = /** @class */ (function () {
        function NowClass() {
            this.now = new Date();
        }
        NowClass.prototype.getTime = function () {
            var _this_1 = this;
            setTimeout(function () {
                console.log(_this_1.now.toLocaleString());
            }, 1000);
        };
        return NowClass;
    }());
    var today = new TodayClass();
    var now = new NowClass();
    today.getTime();
    now.getTime();
})(A04Arrow || (A04Arrow = {}));
//# sourceMappingURL=A04_Arrow.js.map