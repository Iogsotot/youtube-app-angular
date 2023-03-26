import { Component, Input } from '@angular/core';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  // enum for color
  // If older than 6 months – Red
// If from a month up to 6 months – Yellow
// If from seven days up to a month – Green
// If younger than 7 days – Blue
  color = 'blue'

  @Input()
  card!: YoutubeResponseItemModel | null;


  // почему не работает? card undefined
  // thumbnail = this.card.snippet.thumbnails;

  // viewsCount = this.card.statistics.viewCount;

  // likesCount = this.card.statistics.likeCount;

  // dislikesCount = this.card.statistics.dislikeCount;

  // commentsCount = this.card.statistics.commentCount;

  // title = this.card.snippet.title;
}
