import { ThumbnailsModel } from '../../../feature/youtube/models/youtube.model';

export interface CardModel {
  statistics: CardStatisticsModel;
  videoId: string;
  title: string;
  channelTitle: string;
  publishedAt: string | Date;
  description: string;
  thumbnails: ThumbnailsModel;
}

export interface CardStatisticsModel {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}
