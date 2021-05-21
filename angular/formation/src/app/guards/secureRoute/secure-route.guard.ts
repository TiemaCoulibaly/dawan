import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class SecureRouteGuard implements CanActivate {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // --> If
    if (this.authentication.isAuthenticate()) {
      return true;
    }
    return this.router.parseUrl(`/signin?redirectTo=${state.url}`);
  }

  // --> Ternary
  // return true ? this.authentication.isAuthenticate() : false;
}
