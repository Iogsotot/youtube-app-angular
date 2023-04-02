import { Component, Output, EventEmitter } from '@angular/core';
import {
  YoutubeResponseItemModel,
  YoutubeResponseModel,
} from 'src/app/models/youtube.model';
import * as mockResponse from '../../../mocks/response.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  response: YoutubeResponseModel = mockResponse;

  youtubeData: YoutubeResponseModel | null = null;

  hasSearchResult = false;

  @Output() searchResultChange = new EventEmitter<YoutubeResponseItemModel[] | null>();

  getYoutubeData(event: Event) {
    event.preventDefault();
    this.youtubeData = this.response;

    this.hasSearchResult = true;
    this.searchResultChange.emit(this.youtubeData.items);
  }
}
