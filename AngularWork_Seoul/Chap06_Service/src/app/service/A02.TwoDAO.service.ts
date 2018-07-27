import { Injectable } from "@angular/core";
import { TwoVO} from "./A02.TwoVo.service";

@Injectable()
export class TwoDAO {
    getTotal(vo: TwoVO): number{
        vo.total = vo.kor + vo.eng;
        return vo.total;
    }

    getAvg(vo: TwoVO) : number {
        vo.avg = vo.total /2;
        return vo.avg;
    }

    public display(vo: TwoVO):string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}`
    }
}