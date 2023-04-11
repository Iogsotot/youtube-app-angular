import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  YoutubeResponseItemWithStatsModel,
} from '../models/youtube.model';
import { ICard } from '../../../shared/card/models/card.models';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private cardsSubject: BehaviorSubject<ICard[]> = new BehaviorSubject<ICard[]>([]);

  setCards(videoWithStats: YoutubeResponseItemWithStatsModel[]): void {
    const preparedValues: ICard[] = videoWithStats.map((item) => ({
      statistics: {
        viewCount: item.statistics.viewCount.toString(),
        likeCount: item.statistics.likes.toString(),
        dislikeCount: item.statistics.dislikes.toString(),
        commentCount: 'null',
        // commentCount: item.statistics.comments,
      },
      videoId: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails,
    }));

    this.cardsSubject.next(preparedValues);
  }

  getCards(): Observable<ICard[]> {
    return this.cardsSubject.asObservable();
  }
}
