import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortFieldEnum, SortTypeEnum } from 'src/app/models/sortResult.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  SortTypeEnum = SortTypeEnum;

  SortFieldEnum = SortFieldEnum;

  filterByWord = '';

  handleInputFilterChange(value: string) {
    this.filterByWord = value;
    this.sort = {
      type: SortTypeEnum.INPUT,
      field: SortFieldEnum.TEXT,
      value: this.filterByWord,
    };
    this.sortChange.emit(this.sort);
  }

  sort: { type: SortTypeEnum; field: SortFieldEnum; value?: string } = {
    type: SortTypeEnum.DESC,
    field: SortFieldEnum.VIEW,
  };

  @Output()
  sortChange = new EventEmitter<{
    type: SortTypeEnum;
    field: SortFieldEnum;
    value?: string;
  }>();

  handleSortChange(type: SortTypeEnum, field: SortFieldEnum) {
    this.sort = {
      type,
      field,
      value: this.filterByWord,
    };
    this.sortChange.emit(this.sort);
  }

  @Input()
  isOpen: boolean = false;
}
