import { Component, Input, OnInit } from '@angular/core';
import { getColorByDate } from './utils';
import { CardModel } from './models/card.models';
import { CardColorEnum } from './cardColor.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() isDetailed: boolean = false;

  @Input() card?: CardModel;

  id?: string;

  color: CardColorEnum = CardColorEnum.BLUE;

  bgImageUrl?: string;

  ngOnInit(): void {
    this.id = this.card?.videoId;
    this.bgImageUrl = this.card?.thumbnails?.high?.url;
    this.color = this.card?.publishedAt
      ? getColorByDate(this.card.publishedAt)
      : CardColorEnum.BLUE;
  }
}
