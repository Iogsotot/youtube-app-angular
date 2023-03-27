import { Component } from '@angular/core';
import { SortFieldEnum, SortTypeEnum } from './models/sortResult.model';
import { YoutubeResponseItemModel } from './models/youtube.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  isFilterOpen = false;

  testIsOpen = false;

  hasSearchResult = false;

  youtubeItems: YoutubeResponseItemModel[] | null = null;

  sort: any = null;

  onSortChange(value: { type: SortTypeEnum; field: SortFieldEnum; value?: string }) {
    this.sort = value;
  }

  onFilterOpenChange(value: boolean) {
    this.isFilterOpen = value;
  }

  onSearchResultChange(value: YoutubeResponseItemModel[] | null) {
    this.youtubeItems = value;
  }
}
