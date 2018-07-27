import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginService implements CanActivate {
    canActivate(ac: ActivatedRouteSnapshot, rc:RouterStateSnapshot):boolean {
        console.log(ac);
        console.log(rc);

        let check = Math.random() < 0.5;
        console.log(check);

        return check;
    }
}