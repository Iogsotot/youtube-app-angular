import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  VideoStatisticsResponseModel,
  YoutubeResponseModel,
} from '../../feature/youtube/models/youtube.model';
import { SearchResultService } from '../../feature/youtube/services/search-result.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private baseSearchUrl = 'https://www.googleapis.com/youtube/v3/search';

  private baseStatUrl = 'https://returnyoutubedislikeapi.com/votes';

  private baseAdditionalStatUrl = 'https://www.googleapis.com/youtube/v3/videos';

  private apiKey = 'AIzaSyBJAes57AsWNoYXE2SzOuHnBX6zrQFFssg';

  constructor(private http: HttpClient, private searchResultService: SearchResultService) {}

  searchVideos(
    query: string
  ): Observable<{ response: YoutubeResponseModel; statResponses: VideoStatisticsResponseModel[] }> {
    const params = {
      key: this.apiKey,
      type: 'video',
      part: 'snippet',
      maxResults: '15',
      q: query,
    };

      return this.http.get<YoutubeResponseModel>(this.baseSearchUrl, { params }).pipe(
        switchMap((response) => {
          const ids = response.items.map((item) => item.id.videoId);
          const statRequests = ids.map((id) => this.searchVideoStatistics(id));
          return forkJoin(statRequests).pipe(map((statResponses) => ({ response, statResponses })));
        }),
        tap(({ response, statResponses }) => {
          const itemsWithStats = response.items.map((item, index) => ({
            ...item,
            statistics: statResponses[index],
          }));
          this.searchResultService.setCards(itemsWithStats);
        })
      );
    }

  //   return this.http.get<YoutubeResponseModel>(this.baseSearchUrl, { params }).pipe(
  //     switchMap((searchResponse) => {
  //       const ids = searchResponse.items.map((item) => item.id.videoId);
  //       const statRequests = ids.map((id) => this.searchVideoStatistics(id));
  //       const additionalStatRequests = ids.map((id) => this.searchVideoAdditionalStatistics(id));

  //       return forkJoin(statRequests, additionalStatRequests).pipe(
  //         map(([statResponses, additionalStatResponses]) => ({
  //           response: searchResponse,
  //           statResponses,
  //           additionalStatResponses,
  //         }))
  //       );
  //     }),
  //     tap(({ response, statResponses, additionalStatResponses }) => {
  //       const itemsWithStats = response.items.map((item, index) => ({
  //         ...item,
  //         statistics: statResponses[index],
  //         additionalStatistics: additionalStatResponses[index],
  //       }));
  //       this.searchResultService.setCards(itemsWithStats);
  //     })
  //   );
  // }

  searchVideoStatistics(videoId: string): Observable<VideoStatisticsResponseModel> {
    const params = {
      videoId,
    };
    return this.http.get<VideoStatisticsResponseModel>(this.baseStatUrl, { params });
  }

  searchVideoAdditionalStatistics(videoId: string): Observable<any> {
    const params = {
      key: this.apiKey,
      id: videoId,
      part: 'snippet,statistics',
    };
    return this.http.get<VideoStatisticsResponseModel>(this.baseAdditionalStatUrl, { params });
  }
}

// https://returnyoutubedislikeapi.com/votes?videoId=Efy639fThyM
// {
//   id: "Efy639fThyM",
//   dateCreated: "2022-01-22T15:33:41.238223Z",
//   likes: 10,
//   dislikes: 4,
//   rating: 3.857142857142857,
//   viewCount: 826,
//   deleted: false
//   }
// general info
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBJAes57AsWNoYXE2SzOuHnBX6zrQFFssg&type=video&part=snippet&maxResults=15&q=js
