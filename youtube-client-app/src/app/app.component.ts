import { Component } from '@angular/core';
import { YoutubeResponseItemModel } from './feature/youtube/models/youtube.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title: string = 'youtube-client-app';

  youtubeItems: YoutubeResponseItemModel[] | null = null;

  onSearchResultChange(value: YoutubeResponseItemModel[] | null): void {
    this.youtubeItems = value;
  }
}
