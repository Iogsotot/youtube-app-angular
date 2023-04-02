import { Component, Input, OnInit } from '@angular/core';
import { CardColorEnum } from 'src/app/models/cardColor.models';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';
import { getColorByDate } from './utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  color: CardColorEnum = CardColorEnum.BLUE;

  @Input()
  card!: YoutubeResponseItemModel;
  
  bgImageUrl!: string;
  
  ngOnInit() {
    this.bgImageUrl = this.card?.snippet?.thumbnails?.standard?.url;
    this.color =
      this.card && this.card.snippet.publishedAt
        ? getColorByDate(this.card.snippet.publishedAt)
        : CardColorEnum.BLUE;
  }
}
