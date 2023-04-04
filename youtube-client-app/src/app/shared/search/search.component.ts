import { Component } from '@angular/core';
import { SearchResultService } from '../../feature/youtube/services/search-result.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private searchResultService: SearchResultService) {}

  getYoutubeData(event: Event): void {
    event.preventDefault();
    this.searchResultService.getCardsResponse();
    this.searchResultService.getCards();
  }
}
