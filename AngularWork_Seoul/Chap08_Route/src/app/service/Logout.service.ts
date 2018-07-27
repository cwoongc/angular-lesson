import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LogoutService implements CanDeactivate<boolean> {
    //파라메터 타입을 주지 않으면 빌드가 않된다.
    canDeactivate(clz:any, ac: ActivatedRouteSnapshot, rc:RouterStateSnapshot):boolean {
        return window.confirm("Exit?");
    }

}