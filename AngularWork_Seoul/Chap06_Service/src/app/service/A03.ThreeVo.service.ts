
export class ThreeVO {

    private _name:string;
    kor:number;
    eng:number;
    math:number;
    total:number;
    avg:number;

    constructor(name:string, kor:number, eng:number, math?:number) {
        this._name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    } 

    get name():string {
        return this._name;
    }

    set name(name:string) {
        this._name=name;
    }

    public toString():string {
        return `[ThreeVO] name=${this.name}`
    }
}