"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var A05_Class_1 = require("./A05_Class");
// A06_Extends.ts
//3과목에 대한 합산과 평균
var JumsuTwo = /** @class */ (function (_super) {
    __extends(JumsuTwo, _super);
    function JumsuTwo(name, kor, eng, math) {
        var _this = 
        //상속한 경우 생성자 메소드를 기술하면 반드시 super()로 부모 생성자를 호출해 주어야 한다.
        //부모 생성자에 전달할 값이 없는 경우도 super() 호출해야함
        _super.call(this, name, kor, eng) || this;
        _this.math = math;
        return _this;
    }
    //override
    JumsuTwo.prototype.getTotal = function () {
        this.total = this.kor + this.eng + this.math;
        return this.total;
    };
    return JumsuTwo;
}(A05_Class_1.JumsuOne));
console.log('--------------------- A06 Extends --------------------');
//PolyMolphism
var two = new JumsuTwo('NolBu', 100, 60, 80);
// two.getTotal();
// two.getAvg(3);
// two.display();
var one = new A05_Class_1.JumsuOne('HungBu', 80, 60);
var students = [one, two];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var item = students_1[_i];
    item.getTotal();
    if (item instanceof JumsuTwo) {
        item.getAvg(3);
    }
    else if (item instanceof A05_Class_1.JumsuOne) {
        item.getAvg(2);
    }
    item.display();
}
//# sourceMappingURL=A06_Extends.js.map