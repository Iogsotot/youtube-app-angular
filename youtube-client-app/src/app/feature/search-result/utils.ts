import { SortTypeEnum, SortFieldEnum } from 'src/app/models/sortResult.model';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';

export const sortCards = (
  array: YoutubeResponseItemModel[],
  sortType: SortTypeEnum,
  sortField: SortFieldEnum,
): YoutubeResponseItemModel[] => {
  const sortedArr = [...array];
  if (sortField === SortFieldEnum.VIEW) {
    switch (sortType) {
      case SortTypeEnum.ASC:
        return sortedArr.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
        );
      case SortTypeEnum.DESC:
        return sortedArr.sort(
          (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
      default:
        return sortedArr.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
        );
    }
  }

  if (sortField === SortFieldEnum.DATE) {
    switch (sortType) {
      case SortTypeEnum.ASC:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.snippet.publishedAt);
          const dateB: Date = new Date(b.snippet.publishedAt);
          return dateA.getTime() - dateB.getTime();
        });
      case SortTypeEnum.DESC:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.snippet.publishedAt);
          const dateB: Date = new Date(b.snippet.publishedAt);
          return dateB.getTime() - dateA.getTime();
        });

      default:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.snippet.publishedAt);
          const dateB: Date = new Date(b.snippet.publishedAt);
          return dateA.getTime() - dateB.getTime();
        });
    }
  }

  return sortedArr;
};
