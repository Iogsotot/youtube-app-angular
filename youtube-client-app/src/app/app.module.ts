import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '.';
import { HeaderComponent, FooterComponent } from './core';
import { SearchComponent } from './shared/search';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    SearchComponent, 
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
