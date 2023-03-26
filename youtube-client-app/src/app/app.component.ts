import { Component } from '@angular/core';
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

  onFilterOpenChange(value: boolean) {
    this.isFilterOpen = value;
  }

  onsearchResultChange(value: YoutubeResponseItemModel[] | null) {
    this.youtubeItems = value;
  }
}
