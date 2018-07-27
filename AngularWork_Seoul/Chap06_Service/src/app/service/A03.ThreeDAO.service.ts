import { Injectable } from "@angular/core";
import { ThreeVO} from "./A03.ThreeVo.service";

@Injectable()
export class ThreeDAO {
    getTotal(vo: ThreeVO): number{
        if(vo.math === undefined) {
            vo.total = vo.kor + vo.eng;
        } else {
            vo.total = vo.kor + vo.eng + vo.math;
        }
        return vo.total;
    }

    getAvg(vo: ThreeVO, num: number) : number {
        vo.avg = vo.total / num;
        return vo.avg;
    }

    public display(vo: ThreeVO):string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}`
    }
}