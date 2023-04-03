import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `<app-filter></app-filter> <app-search-result></app-search-result>`,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
