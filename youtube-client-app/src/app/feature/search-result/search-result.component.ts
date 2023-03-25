import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  isOpen = false;

  cards = [null, null, null]; // прокинуть сюда моковые данные
}
