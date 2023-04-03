import { Component, Output, Input, EventEmitter } from '@angular/core';
import { YoutubeResponseItemModel } from '../../feature/youtube/models/youtube.model';
import { FilterService } from '../../feature/youtube/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() hasSearchResult: boolean = false;

  @Output() filterOpenChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Output() searchResultChange: EventEmitter<
    YoutubeResponseItemModel[] | null
  > = new EventEmitter<YoutubeResponseItemModel[] | null>();

  // isFilterOpen: boolean = false;

  testIsOpen: boolean = false;

  searchResult: YoutubeResponseItemModel[] | null = null;

  constructor(private filterService: FilterService) {}

  // toggleFilter(): void {
  //   this.isFilterOpen = !this.isFilterOpen;
  //   this.filterOpenChange.emit(this.isFilterOpen);
  // }

  filterToggle() {
    this.filterService.toggle()
  }

  onSearchResultChange(value: YoutubeResponseItemModel[] | null): void {
    this.searchResult = value;
    this.searchResultChange.emit(this.searchResult);
  }
}
