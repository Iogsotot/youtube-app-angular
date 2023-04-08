import { Component, Input, OnInit } from '@angular/core';
import { CardColorEnum } from 'src/app/shared/card/cardColor.models';
import { YoutubeResponseItemModel } from 'src/app/feature/youtube/models/youtube.model';
import { getColorByDate } from './utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() isDetailed: boolean = false;

  @Input() card?: YoutubeResponseItemModel;

  id?: string;

  color: CardColorEnum = CardColorEnum.BLUE;

  bgImageUrl?: string;

  ngOnInit(): void {
    this.id = this.card?.id;
    this.bgImageUrl = this.card?.snippet?.thumbnails?.standard?.url;
    this.color = this.card?.snippet?.publishedAt
      ? getColorByDate(this.card.snippet.publishedAt)
      : CardColorEnum.BLUE;
  }
}
