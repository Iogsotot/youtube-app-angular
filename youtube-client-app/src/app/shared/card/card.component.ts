import { Component, Input, OnInit } from '@angular/core';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';

const enum CardColorEnum {
  BLUE = 'blue', // 7d
  GREEN = 'green', // 7d - 1 month
  YELLOW = 'yellow', // 1m - 6m
  RED = 'red', // 6m+
}

const getColorByDate = (inputDate: string | Date): CardColorEnum => {
  const date = new Date(inputDate);
  const currentDate = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDay();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();

  if (currentYear - year > 1) {
    return CardColorEnum.RED;
  }
  if (currentMonth - month > 6 || (currentYear - year === 1 && currentMonth - month <= 6)) {
    return CardColorEnum.YELLOW;
  }
  if (currentMonth - month === 1 || (currentMonth - month === 0 && currentDay - day > 7)) {
    return CardColorEnum.GREEN;
  }
  return CardColorEnum.BLUE;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  color: CardColorEnum = CardColorEnum.BLUE;

  @Input()
  card!: YoutubeResponseItemModel;

  ngOnInit() {
    this.color =
      this.card && this.card.snippet.publishedAt
        ? getColorByDate(this.card.snippet.publishedAt)
        : CardColorEnum.BLUE;
  }
}
