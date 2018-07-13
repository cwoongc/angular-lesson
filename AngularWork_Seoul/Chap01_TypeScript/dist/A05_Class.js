"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_NAME = '3학년 1반';
var JumsuOne = /** @class */ (function () {
    function JumsuOne(name, kor, eng) {
        this._java = 0;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.total = 0;
        this.avg = 0;
    }
    Object.defineProperty(JumsuOne.prototype, "java", {
        get: function () {
            return this._java;
        },
        // Getter, Setter Method
        // 메서드 방식으로 정의하고 프로퍼티 형태로 참조한다.
        // Setter => 리턴타입은 기술하지 않는다. : void 적으면 에러
        set: function (java) {
            this._java = java;
        },
        enumerable: true,
        configurable: true
    });
    JumsuOne.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    JumsuOne.prototype.getAvg = function (num) {
        this.avg = this.total / num;
        return this.avg;
    };
    JumsuOne.prototype.display = function () {
        console.log(this.name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg + "\uC785\uB2C8\uB2E4."); // es2015
    };
    return JumsuOne;
}());
exports.JumsuOne = JumsuOne;
var hong1 = new JumsuOne('Hong', 100, 80);
hong1.getTotal();
hong1.getAvg(2);
hong1.display();
// private 접근제한자.
// console.log(hong1._java);
//Getter, Setter 참조
hong1.java = 100;
console.log(hong1.java);
//JS 컴파일
// tsc fileName
// 지정된 폴더에 출력
// tsc --outDir 경로 fileName
// tsc --outDir ./../dist A01_Class.ts
///버전지정 --target 원하는 js 버전 (es5, es6)
// tsc --outDir ./../dist --target es6 A01_Class.ts 
// 타입스크립트로 잘만들어 놓고 브라우저 사정에 따라 target을 바꾸면 된다.
//# sourceMappingURL=A05_Class.js.map