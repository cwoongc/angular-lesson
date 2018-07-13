// A07_Interface.ts

interface IJumsu {
    age: number;

    //인터페이스 메소드는 접근제한자 기술하지 않는다.
    getTotal(): number;
    getAvg(num:number):number;
    display(): void;
}

// interface의 모든 메서드나 멤버변수를 구현하지 않으면 추상클래스로 선언해야 한다.
// 즉 추상클래스가 된다.
// 구현하지 않은 메서드는 추상 메서드로 선언을 꼭 해주어야 함
abstract class AJumsu implements IJumsu {
    //Interface 멤버 접근제한자는 무조건 public(default)
    age:number = 0;


    protected name: string;
    private kor: number;
    private eng: number;
    protected total: number;
    protected avg: number;

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

    abstract display():void;


    // display(): void {
    //     console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다.`); // es2015
    // }
}



class JumsuThree extends AJumsu {
    display(): void {
        console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다.`); // es2015
    }
}


let three: JumsuThree = new JumsuThree('Hong', 40, 60);

three.getTotal();
three.getAvg(2);
three.display();