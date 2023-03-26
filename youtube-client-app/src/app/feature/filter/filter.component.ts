import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortFieldEnum, SortTypeEnum } from 'src/app/models/sortResult.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  // By clicking on the Settings button, the Filtering criteria block should be toggled
  // It should be possible to sort search results by date or count of views
  // Sorting should work both in the direction of decreasing values and in the direction of increasing values
  // Using a pipe, filter search results by value that a user types in the input

  SortTypeEnum = SortTypeEnum;

  SortFieldEnum = SortFieldEnum;

  sortValue = 'tag?';

  onWordSort(e: Event) {
    console.log(this.sortValue, e);
  }

  sort: { type: SortTypeEnum; field: SortFieldEnum } = {
    type: SortTypeEnum.DESC,
    field: SortFieldEnum.VIEW,
  };

  @Output()
  sortChange = new EventEmitter<{ type: SortTypeEnum; field: SortFieldEnum }>();

  handleSortChange(type: SortTypeEnum, field: SortFieldEnum) {
    this.sort = {
      type,
      field,
    };
    console.log(this.sort);
    this.sortChange.emit(this.sort);
  }

  @Input()
  isOpen: boolean = false;
}
