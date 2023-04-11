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
import { LoginComponent } from '../feature/login/login.component';
import { LogoutComponent } from '../feature/logout/logout.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, SearchComponent, LoginComponent, LogoutComponent],
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
