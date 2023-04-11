export interface YoutubeResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: YoutubeResponseItemModel[];
}

interface PageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeResponseItemModel {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: SnippetModel;
}

export interface YoutubeResponseItemWithStatsModel extends YoutubeResponseItemModel {
  statistics: VideoStatisticsResponseModel;
}

export interface YoutubeResponseItemWithCommentStatsModel extends YoutubeResponseItemModel {
  statistics: { commentCount: string };
}

export interface VideoStatisticsResponseModel {
  id: string;
  dateCreated: Date | string;
  likes: number;
  dislikes: number;
  viewCount: number;
}

export interface VideoCommentStatisticsModel {
  items: VideoItemStatisticsModel[];
}

export interface VideoItemStatisticsModel {
  id: string;
  statistics: { viewCount: string; likeCount: string; favoriteCount: string; commentCount: string };
}


interface SnippetModel {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date | string;
  publishedAt: Date | string;
  thumbnails: ThumbnailsModel;
  title: string;
}

interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}

const enum ThumbnailsType {
  Default = 'default',
  Medium = 'medium',
  High = 'high',
  Standard = 'standard',
  Maxres = 'maxres',
}

export type ThumbnailsModel = {
  [key in ThumbnailsType]: ThumbnailModel;
};
