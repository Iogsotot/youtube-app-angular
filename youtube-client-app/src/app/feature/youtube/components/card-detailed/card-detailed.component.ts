import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { YoutubeResponseItemModel } from '../../models/youtube.model';
import { SearchResultService } from '../../services/search-result.service';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  cardId: string | null = null;

  private cards?: YoutubeResponseItemModel[] | undefined;

  card?: YoutubeResponseItemModel;

  constructor(public route: ActivatedRoute, private searchResultService: SearchResultService) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  private loadData(): void {
    this.searchResultService.getData().subscribe((data) => {
      this.cards = data;
      this.card = this.cards?.find((card) => card.id === this.cardId);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
