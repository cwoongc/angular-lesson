import { JumsuOne } from "./A05_Class";

// A06_Extends.ts




//3과목에 대한 합산과 평균
class JumsuTwo extends JumsuOne{
    private math: number;

    constructor(name:string, kor:number, eng:number, math:number) {
        //상속한 경우 생성자 메소드를 기술하면 반드시 super()로 부모 생성자를 호출해 주어야 한다.
        //부모 생성자에 전달할 값이 없는 경우도 super() 호출해야함
        super(name,kor,eng);
        this.math = math;
    }

    //override
    getTotal(): number {
        this.total = this.kor + this.eng + this.math;
        return this.total
    }
}


console.log('--------------------- A06 Extends --------------------');

//PolyMolphism
let two: JumsuOne = new JumsuTwo('NolBu',100,60,80);
// two.getTotal();
// two.getAvg(3);
// two.display();


let one:JumsuOne = new JumsuOne('HungBu', 80, 60);

let students: Array<JumsuOne> = [one,two];
for(let item of students) {
    item.getTotal();
    if(item instanceof JumsuTwo) {
        item.getAvg(3);
    } else if(item instanceof JumsuOne) {
        item.getAvg(2);
    }

    item.display();
}