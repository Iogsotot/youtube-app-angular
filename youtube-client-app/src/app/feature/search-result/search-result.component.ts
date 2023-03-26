import { Component, Input, OnChanges } from '@angular/core';
import { SortFieldEnum, SortTypeEnum } from 'src/app/models/sortResult.model';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';
import { sortCards } from './utils';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  sortedCards: YoutubeResponseItemModel[] | null = null;

  @Input()
  cards: YoutubeResponseItemModel[] | null = null;

  @Input()
  sort!: { type: SortTypeEnum; field: SortFieldEnum };

  ngOnChanges() {
    if (this.sort && this.cards) {
      this.sortedCards = sortCards(this.cards, this.sort.type, this.sort.field);
      this.cards = this.sortedCards;
      console.log(this.cards);
      console.log(this.sortedCards);
    }
  }

}
