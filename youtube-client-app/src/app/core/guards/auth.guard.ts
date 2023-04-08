import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  lastChangedToken: string | null = null;

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.localStorageService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
