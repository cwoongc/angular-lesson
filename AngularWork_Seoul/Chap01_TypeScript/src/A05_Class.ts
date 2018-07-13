
export const CLASS_NAME :string = '3학년 1반';

export class JumsuOne { //es2015 추가
    //접근제한자 => private, protected, public 3개만존재. default는 public
    protected name: string;
    protected kor: number;
    protected eng: number;
    protected total: number;
    protected avg: number;

    private _java: number = 0;

    // Getter, Setter Method
    // 메서드 방식으로 정의하고 프로퍼티 형태로 참조한다.
    // Setter => 리턴타입은 기술하지 않는다. : void 적으면 에러
    public set java(java:number) {
        this._java = java;
    }

    public get java():number {
        return this._java;
    }

    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.total = 0;
        this.avg = 0;
    }

    getTotal(): number {
        this.total = this.kor + this.eng;
        return this.total
    }

    public getAvg(num: number): number {
        this.avg = this.total / num;
        return this.avg;
    }

    display(): void {
        console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다.`); // es2015
    }
}


let hong1: JumsuOne = new JumsuOne('Hong', 100, 80);
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
