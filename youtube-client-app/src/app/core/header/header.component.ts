import { Component, Output, Input, EventEmitter } from '@angular/core';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isFilterOpen = false;

  testIsOpen = false;

  searchResult: YoutubeResponseItemModel[] | null = null;

  @Output()
  filterOpenChange = new EventEmitter<boolean>();

  @Output()
  searchResultChange = new EventEmitter<YoutubeResponseItemModel[] | null>();

  @Input()
  hasSearchResult: boolean = false;

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.filterOpenChange.emit(this.isFilterOpen);
  }

  onSearchResultChange(value: YoutubeResponseItemModel[] | null) {
    this.searchResult = value;
    this.searchResultChange.emit(this.searchResult);
  }
}
