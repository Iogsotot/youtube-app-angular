import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import AppRoutingModule from "./app-routing.module";
import AppComponent from "./app.component";
import HeaderComponent from "./core/header/header.component";
import SearchComponent from "./shared/search/search.component";
import FooterComponent from "./core/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppModule {}
