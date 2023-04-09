import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { passwordStrengthValidator } from '../../shared/form/validators/passwordStrengthValidator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  passwordHint: string =
    'Use a password that is at least 8 characters long ' +
    'and includes a combination of uppercase and lowercase letters, numbers, ' +
    'and special characters - !@#?$%^&*№';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator]],
    });
  }

  onSubmit(): void {
    this.localStorageService.setItem('userData', JSON.stringify(this.loginForm.value));
    this.localStorageService.setItem(
      'token',
      `anyTokenFor: ${JSON.stringify(this.loginForm.value.login).replaceAll('"', '')}`
    );
    this.router.navigate(['/home']);
  }

  getErrorMessage(type: string): string {
    if (type === 'login') {
      if (this.loginForm.get('login')?.hasError('required')) {
        return 'Please enter a login email';
      }

      return this.loginForm.get('login')?.hasError('email') ? 'Not a valid email' : '';
    }

    if (type === 'password') {
      if (this.loginForm.get('password')?.hasError('required')) {
        return 'Please enter a password';
      }

      return this.loginForm.get('password')?.hasError('passwordStrength')
        ? `Your password isn't strong enough. ${this.passwordHint}`
        : '';
    }

    return 'you do smth wrong';
  }
}
