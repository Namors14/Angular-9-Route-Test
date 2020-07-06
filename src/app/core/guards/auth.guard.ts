import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        const isLoggedIn = !!localStorage.getItem('user');

        if (isLoggedIn) {
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }
}
