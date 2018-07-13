"use strict";
var Jumsu = /** @class */ (function () {
    function Jumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.total = 0;
        this.avg = 0;
    }
    Jumsu.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    Jumsu.prototype.getAvg = function (num) {
        this.avg = this.total / num;
        return this.avg;
    };
    Jumsu.prototype.display = function () {
        console.log(this.name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg + "\uC785\uB2C8\uB2E4."); // es2015
    };
    return Jumsu;
}());
var hong = new Jumsu('Hong', 100, 80);
hong.getTotal();
hong.getAvg(2);
hong.display();
//JS 컴파일
// tsc fileName
// 지정된 폴더에 출력
// tsc --outDir 경로 fileName
// tsc --outDir ./../dist A01_Class.ts
///버전지정 --target 원하는 js 버전 (es5, es6)
// tsc --outDir ./../dist --target es6 A01_Class.ts 
// 타입스크립트로 잘만들어 놓고 브라우저 사정에 따라 target을 바꾸면 된다.
//# sourceMappingURL=A01_Class.js.map