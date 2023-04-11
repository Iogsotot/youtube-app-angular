import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../shared/form/validators/passwordStrengthValidator';
import { AuthService } from '../../core/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator]],
    });
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password);
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
