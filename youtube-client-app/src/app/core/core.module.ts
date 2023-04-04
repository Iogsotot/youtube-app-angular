import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { SearchComponent } from '../shared/search/search.component';
import { LoginComponent } from '../feature/login/login.component';
import { MaterialModule } from '../material.module';
import { LogoutComponent } from '../feature/logout/logout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    LoginComponent,
    LogoutComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
