import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortFieldModel } from '../../models/sortResult.model';
import { sortCards, sortCardsByWordOrSentence } from './utils';
import { FilterService } from '../../services/filter.service';
import { SearchResultService } from '../../services/search-result.service';
import { CardModel } from '../../../../shared/card/models/card.models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  cards?: CardModel[];

  sort!: SortFieldModel;

  sortedCards?: CardModel[];

  constructor(
    private filterService: FilterService,
    private searchResultService: SearchResultService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getSortConfig().subscribe((value: SortFieldModel) => {
        this.sort = value;
        if (this.sort && this.cards) {
          if (this.sort.value) {
            this.sortedCards = sortCardsByWordOrSentence(this.cards, this.sort.value);
          } else {
            this.sortedCards = sortCards(this.cards, this.sort.type, this.sort.field);
          }
        } else {
          this.sortedCards = this.cards;
        }
      })
    );

    this.subscriptions.add(
      this.searchResultService.getCards().subscribe((value: CardModel[]) => {
        this.cards = value;
        this.sortedCards = this.cards;
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
