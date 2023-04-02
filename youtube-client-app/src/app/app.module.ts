import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from '.';
import { HeaderComponent, FooterComponent } from './core';
import { SearchComponent } from './shared/search';
import { CardComponent } from './shared/card/card.component';
import { FilterComponent } from './feature/filter/filter.component';
import { SearchResultComponent } from './feature/search-result/search-result.component';
import { LogoComponent } from './shared/logo/logo.component';
import { LoginComponent } from './feature/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CardComponent,
    FilterComponent,
    SearchResultComponent,
    LogoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
