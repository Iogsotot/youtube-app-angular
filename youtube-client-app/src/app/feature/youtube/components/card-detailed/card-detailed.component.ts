import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from '../../services/search-result.service';
import { CardModel } from '../../../../shared/card/models/card.models';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent implements OnInit {
  cardId: string | null = null;

  private cards?: CardModel[] | undefined;

  card?: CardModel;

  constructor(public route: ActivatedRoute, private searchResultService: SearchResultService) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  private loadData(): void {
    this.searchResultService.getCards().subscribe((cards) => {
      this.cards = cards;
      this.card = this.cards?.find((card) => card.videoId === this.cardId);
    });
  }
}
