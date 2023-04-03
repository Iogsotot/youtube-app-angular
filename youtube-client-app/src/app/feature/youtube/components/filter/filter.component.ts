import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SortFieldEnum, SortFieldModel, SortTypeEnum } from '../../models/sortResult.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  isOpen!: boolean;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.getState().subscribe((value: boolean) => {
      this.isOpen = value;
    });
  }

  @Output() sortChange: EventEmitter<SortFieldModel> = new EventEmitter<SortFieldModel>();

  SortTypeEnum = SortTypeEnum;

  SortFieldEnum = SortFieldEnum;

  filterByWord: string = '';

  sort: SortFieldModel = {
    type: SortTypeEnum.DESC,
    field: SortFieldEnum.VIEW,
  };

  handleInputFilterChange(value: string): void {
    this.filterByWord = value;
    this.sort = {
      type: SortTypeEnum.INPUT,
      field: SortFieldEnum.TEXT,
      value: this.filterByWord,
    };
    this.sortChange.emit(this.sort);
  }

  handleSortChange(type: SortTypeEnum, field: SortFieldEnum): void {
    this.sort = {
      type,
      field,
      value: this.filterByWord,
    };
    this.sortChange.emit(this.sort);
  }

}
