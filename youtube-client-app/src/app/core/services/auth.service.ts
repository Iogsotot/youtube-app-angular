import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(login: string, password: string): void {
    this.localStorageService.setItem('userData', `login: ${login}, password: ${password}`);
    this.localStorageService.setItem('token', `anyTokenFor: ${login}`);
    this.router.navigate(['/home']);
    this.loggedIn.next(true);
  }

  logout(): void {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('userData');
    this.router.navigate(['/login']);
    this.loggedIn.next(false);
  }
}
