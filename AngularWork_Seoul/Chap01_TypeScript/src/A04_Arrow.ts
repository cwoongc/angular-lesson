namespace A04Arrow {

    function onAdd(x: number, y: number) : number {
        let result = x + y;
        return result;
    }

    //리터럴 방식으로 정의
    //function 을 생략하고 ()=>{} 형태로 사용
    let onMin = (x: number, y:number):number => {
        let result = x-y;
        return result;
    }

    //Arrow함수의 내용이 딱 1줄이고 그값이 return인 경우
    //return과 {}가 생략된다.
    let onMulti = (x:number, y: number) => x*y;

    //매개변수가 1개인 경우는 () 생략이 가능(javascript)
    // let onDiv = x => x + 10;
    let onDiv = (x:number) => x + 10;

    console.log(`${onAdd(10,20)}, ${onMin(20,10)}, ${onMulti(2,5)}, ${onDiv(20)}`);

    //명령이 한줄인데 값이 아닌경우 실행만 함
    let onTest = (x:number)=>console.log(x);

    // this의 참조가 다르다
    class TodayClass {
        private today:Date = new Date();

        getTime(): void {
            let _this = this; //getTime의 소속객체인 TodayClass 객체가 _this에 저장됨
            setTimeout(function() { //node.setTimeout의 소속객체가 this가 된다.
                console.log(_this.today.toLocaleString());
                // console.log(this.today.toLocaleString());
            }, 1000)
        }
    }

    class NowClass {
        private now:Date = new Date();

        getTime(): void {
            setTimeout(()=> { //class가 this가 된다.
                console.log(this.now.toLocaleString());
            }, 1000)
        }
    }

    let today = new TodayClass();
    let now = new NowClass();
    today.getTime();
    now.getTime();



}