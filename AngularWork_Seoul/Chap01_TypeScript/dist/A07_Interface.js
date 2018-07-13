"use strict";
// A07_Interface.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface의 모든 메서드나 멤버변수를 구현하지 않으면 추상클래스로 선언해야 한다.
// 즉 추상클래스가 된다.
// 구현하지 않은 메서드는 추상 메서드로 선언을 꼭 해주어야 함
var AJumsu = /** @class */ (function () {
    function AJumsu(name, kor, eng) {
        //Interface 멤버 접근제한자는 무조건 public(default)
        this.age = 0;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.total = 0;
        this.avg = 0;
    }
    AJumsu.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    AJumsu.prototype.getAvg = function (num) {
        this.avg = this.total / num;
        return this.avg;
    };
    return AJumsu;
}());
var JumsuThree = /** @class */ (function (_super) {
    __extends(JumsuThree, _super);
    function JumsuThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JumsuThree.prototype.display = function () {
        console.log(this.name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg + "\uC785\uB2C8\uB2E4."); // es2015
    };
    return JumsuThree;
}(AJumsu));
var three = new JumsuThree('Hong', 40, 60);
three.getTotal();
three.getAvg(2);
three.display();
//# sourceMappingURL=A07_Interface.js.map