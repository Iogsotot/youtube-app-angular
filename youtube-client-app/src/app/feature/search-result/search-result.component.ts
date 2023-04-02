import { Component, Input, OnChanges } from '@angular/core';
import { SortFieldModel } from '../../models/sortResult.model';
import { YoutubeResponseItemModel } from '../../models/youtube.model';
import { sortCards, sortCardsByWordOrSentence } from './utils';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  @Input() cards: YoutubeResponseItemModel[] | null = null;

  @Input() sort?: SortFieldModel;

  sortedCards: YoutubeResponseItemModel[] | null = null;

  ngOnChanges() {
    if (this.sort && this.cards) {
      if (this.sort.value) {
        this.sortedCards = sortCardsByWordOrSentence(
          this.cards,
          this.sort.value
        );
      } else {
        this.sortedCards = sortCards(
          this.cards,
          this.sort.type,
          this.sort.field
        );
      }
    } else {
      this.sortedCards = this.cards;
    }
  }
}
