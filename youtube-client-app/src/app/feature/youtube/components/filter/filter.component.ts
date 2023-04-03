import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortFieldEnum, SortTypeEnum } from '../../models/sortResult.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  isOpen!: boolean;

  SortTypeEnum = SortTypeEnum;

  SortFieldEnum = SortFieldEnum;

  filterByWord: string = '';

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getState().subscribe((value: boolean) => {
        this.isOpen = value;
      })
    );
  }

  handleInputFilterChange(value: string): void {
    this.filterByWord = value;
    this.filterService.setSortConfig({
      type: SortTypeEnum.INPUT,
      field: SortFieldEnum.TEXT,
      value: this.filterByWord,
    });
  }

  handleSortChange(type: SortTypeEnum, field: SortFieldEnum): void {
    this.filterService.setSortConfig({
      type,
      field,
      value: this.filterByWord,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
