import { Component, Input, OnChanges } from '@angular/core';
import { getColorByDate } from './utils';
import { CardModel } from './models/card.models';
import { CardColorEnum } from './cardColor.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() isDetailed: boolean = false;

  @Input() card?: CardModel;

  color: CardColorEnum = CardColorEnum.BLUE;

  bgImageUrl?: string;

  ngOnChanges(): void {
    this.bgImageUrl = this.card?.thumbnails?.high?.url;
    this.color = this.card?.publishedAt
      ? getColorByDate(this.card.publishedAt)
      : CardColorEnum.BLUE;
  }
}
