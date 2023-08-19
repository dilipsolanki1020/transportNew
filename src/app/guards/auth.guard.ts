import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Check if the user is authenticated
    // if (!this.authService.isAuthenticated()) {
    //   // Redirect to the login page if not authenticated
    //   return this.router.parseUrl('/login');
    // }

    // Check user roles and route access
    // const roles = this.authService.getUserRoles();

    // if (next.data.roles && next.data.roles.includes(roles)) {
    //   // Allow access if user has the required role
    //   return true;
    // } else {
    //   // Redirect to a different page or show an unauthorized message
    //   return this.router.parseUrl('/unauthorized');
    // }

    return true;
  }
}
