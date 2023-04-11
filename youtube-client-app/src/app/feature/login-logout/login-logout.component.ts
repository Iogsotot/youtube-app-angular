import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss'],
})
export class LoginLogoutComponent {
  loggedIn$ = this.authService.isLoggedIn;

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
