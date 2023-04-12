import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { AuthModule } from './feature/auth/auth.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';
import { ApiKeyInterceptor } from './apiKey.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    HomePageModule,
    AuthModule,
    AdminPageModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
