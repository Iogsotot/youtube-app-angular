import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  VideoCommentStatisticsModel,
  VideoStatisticsResponseModel,
  YoutubeResponseModel,
} from '../../feature/youtube/models/youtube.model';
import { CardModel } from '../../shared/card/models/card.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private readonly baseSearchUrl = 'https://www.googleapis.com/youtube/v3/search';

  private readonly baseStatUrl = 'https://returnyoutubedislikeapi.com/votes';

  private readonly baseAdditionalStatUrl = 'https://www.googleapis.com/youtube/v3/videos';

  private readonly apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchVideos(query: string): Observable<CardModel[]> {
    const params = {
      key: this.apiKey,
      type: 'video',
      part: 'snippet',
      maxResults: '15',
      q: query,
    };

    return this.http.get<YoutubeResponseModel>(this.baseSearchUrl, { params }).pipe(
      switchMap((videos) => {
        const ids = videos.items.map((item) => item.id.videoId);
        const statRequests = ids.map((id) => this.searchVideoStatistics(id));
        const commentStatRequest = this.searchVideoCommentStatistics(ids.join(','));

        return forkJoin([...statRequests, commentStatRequest]).pipe(
          map((responses) => {
            const statResponses = responses.slice(0, -1) as VideoStatisticsResponseModel[];
            const commentStatResponse = responses.slice(-1)[0] as VideoCommentStatisticsModel;

            const cards = videos.items.map((item, index) => {
              const statistics = statResponses[index];
              const commentStatistics = commentStatResponse.items.find(
                (commentItem) => commentItem.id === ids[index]
              )?.statistics;
              const card: CardModel = {
                statistics: {
                  viewCount: statistics.viewCount.toString() ?? '0',
                  likeCount: statistics.likes.toString() ?? '0',
                  dislikeCount: statistics.dislikes.toString() ?? '0',
                  commentCount: commentStatistics?.commentCount ?? '0',
                },
                videoId: item.id.videoId ?? '0',
                title: item.snippet.title ?? '0',
                channelTitle: item.snippet.channelTitle ?? '0',
                publishedAt: item.snippet.publishedAt ?? '0',
                description: item.snippet.description ?? '0',
                thumbnails: item.snippet.thumbnails ?? '0',
              };
              return card;
            });
            return cards;
          })
        );
      })
    );
  }

  searchVideoStatistics(videoId: string): Observable<VideoStatisticsResponseModel> {
    const params = {
      videoId,
    };
    return this.http.get<VideoStatisticsResponseModel>(this.baseStatUrl, { params });
  }

  searchVideoCommentStatistics(videoId: string): Observable<VideoCommentStatisticsModel> {
    const params = {
      key: this.apiKey,
      id: videoId,
      part: 'snippet,statistics',
    };
    return this.http.get<VideoCommentStatisticsModel>(this.baseAdditionalStatUrl, { params });
  }
}
