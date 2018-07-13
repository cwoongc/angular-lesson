// A08_InterfaceType.ts

interface ObjType {
    name: string;
    age: number;
    ary: number[];
    today: Date;
    data: {
        address:string,
        tel:string
    };
    getInfo: (a:string)=>string;

}


let obj: ObjType = {
    name: 'NolBu',
    age: 40,
    ary: [10,20,30],
    today : new Date(),
    data: {
        address: 'Seoul',
        tel: '010-1234-5678'
    },
    getInfo: function (greet:string): string {
        return `${this.name}님의 나이는 ${this.age}이고 전번은 ${this.data.tel}`;
    }
}