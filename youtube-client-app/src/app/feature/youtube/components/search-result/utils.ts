import { CardModel } from '../../../../shared/card/models/card.models';
import { SortTypeEnum, SortFieldEnum } from '../../models/sortResult.model';

export const sortCards = (
  array: CardModel[],
  sortType: SortTypeEnum,
  sortField: SortFieldEnum
): CardModel[] => {
  const sortedArr = [...array];
  if (sortField === SortFieldEnum.VIEW) {
    switch (sortType) {
      case SortTypeEnum.ASC:
        return sortedArr.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
        );
      case SortTypeEnum.DESC:
        return sortedArr.sort(
          (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
        );
      default:
        return sortedArr.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
        );
    }
  }

  if (sortField === SortFieldEnum.DATE) {
    switch (sortType) {
      case SortTypeEnum.ASC:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.publishedAt);
          const dateB: Date = new Date(b.publishedAt);
          return dateB.getTime() - dateA.getTime();
        });
      case SortTypeEnum.DESC:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.publishedAt);
          const dateB: Date = new Date(b.publishedAt);
          return dateA.getTime() - dateB.getTime();
        });

      default:
        return sortedArr.sort((a, b) => {
          const dateA: Date = new Date(a.publishedAt);
          const dateB: Date = new Date(b.publishedAt);
          return dateB.getTime() - dateA.getTime();
        });
    }
  }

  return sortedArr;
};

export const sortCardsByWordOrSentence = (array: CardModel[], value: string): CardModel[] | [] =>
  array.filter((item) => {
    const isFound =
      item.title.includes(value) ||
      item.description.includes(value) ||
      item.channelTitle.includes(value);

    return isFound;
  });
