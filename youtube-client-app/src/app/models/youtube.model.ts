export default interface YoutubeModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoModel;
  items: ItemModel[];
}

interface PageInfoModel {
  totalResults: number;
  resultsPerPage: number;
}

interface ItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetModel;
  statistics: StatisticsModel;
}

interface SnippetModel {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsModel;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizedModel;
  defaultAudioLanguage: string;
}

interface LocalizedModel {
  title: string;
  description: string;
}

interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}

const enum ThumbnailsType {
  Default = "default",
  Medium = "medium",
  High = "high",
  Standard = "standard",
  Maxres = "maxres"
}

type ThumbnailsModel = {
  [key in ThumbnailsType]: ThumbnailModel;
};

interface StatisticsModel {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
