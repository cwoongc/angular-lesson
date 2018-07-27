import { Injectable } from "@angular/core";



@Injectable()
export class TwoVO {

    private _name:string;
    kor:number;
    eng:number;
    total:number;
    avg:number;

    get name():string {
        return this._name;
    }

    set name(name:string) {
        this._name=name;
    }

    public toString():string {
        return `[TwoVO] name=${this.name}`
    }

    
}