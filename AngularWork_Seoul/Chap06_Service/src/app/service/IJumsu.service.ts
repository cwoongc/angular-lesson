import { ThreeVO } from "./A03.ThreeVo.service";

export interface IJumsu {
    getTotal(vo: ThreeVO): number;
    getAvg(vo:ThreeVO, num:number):number;
    display(vo:ThreeVO):string;

}