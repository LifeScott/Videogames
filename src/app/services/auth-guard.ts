import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(): boolean {
    if (!sessionStorage.getItem('user')) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }

  }
}