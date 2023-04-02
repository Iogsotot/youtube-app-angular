import { Component, Output, EventEmitter } from '@angular/core';
import {
  YoutubeResponseItemModel,
  YoutubeResponseModel,
} from '../../models/youtube.model';
import * as mockResponse from '../../../mocks/response.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchResultChange: EventEmitter<
    YoutubeResponseItemModel[] | null
  > = new EventEmitter<YoutubeResponseItemModel[] | null>();

  response: YoutubeResponseModel = mockResponse;

  youtubeData: YoutubeResponseModel | null = null;

  hasSearchResult: boolean = false;

  getYoutubeData(event: Event): void {
    event.preventDefault();
    this.youtubeData = this.response;

    this.hasSearchResult = true;
    this.searchResultChange.emit(this.youtubeData.items);
  }
}
