import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { SearchComponent } from '../shared/search/search.component';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { LoginLogoutComponent } from '../feature/login-logout/login-logout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    AvatarComponent,
    LoginLogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
