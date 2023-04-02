export enum SortTypeEnum {
  DESC = 'descending',
  ASC = 'ascending',
  INPUT = 'input',
}

export enum SortFieldEnum {
  VIEW = 'view',
  DATE = 'date',
  LIKE = 'like',
  DISLIKE = 'dislike',
  TEXT = 'text',
}

export interface SortFieldModel {
  type: SortTypeEnum;
  field: SortFieldEnum;
  value?: string;
}
