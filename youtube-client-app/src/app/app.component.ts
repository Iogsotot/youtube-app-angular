import { Component } from '@angular/core';
import { SortFieldModel } from './feature/youtube/models/sortResult.model';
import { YoutubeResponseItemModel } from './feature/youtube/models/youtube.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFilterOpen: boolean = false;

  testIsOpen: boolean = false;

  hasSearchResult: boolean = false;

  youtubeItems: YoutubeResponseItemModel[] | null = null;

  sort?: SortFieldModel;

  readonly title: string = 'youtube-client-app';

  onSortChange(value: SortFieldModel): void {
    this.sort = value;
  }

  onFilterOpenChange(value: boolean): void {
    this.isFilterOpen = value;
  }

  onSearchResultChange(value: YoutubeResponseItemModel[] | null): void {
    this.youtubeItems = value;
  }
}
