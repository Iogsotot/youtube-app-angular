import { ThumbnailsModel } from '../../../feature/youtube/models/youtube.model';

export interface ICard {
  statistics: ICardStatistics;
  videoId: string;
  title: string;
  channelTitle: string;
  publishedAt: string | Date;
  description: string;
  thumbnails: ThumbnailsModel;
}

export interface ICardStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}
