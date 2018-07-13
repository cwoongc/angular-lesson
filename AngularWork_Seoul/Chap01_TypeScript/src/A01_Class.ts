class Jumsu { //es2015 추가
    private name: string;
    private kor: number;
    private eng: number;
    private total: number;
    private avg: number;

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


let hong: Jumsu = new Jumsu('Hong', 100, 80);
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
