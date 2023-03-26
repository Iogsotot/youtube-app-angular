import { Component, Output, EventEmitter } from '@angular/core';
import { YoutubeResponseItemModel, YoutubeResponseModel } from 'src/app/models/youtube.model';
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

  @Output()
  hassearchResultChange = new EventEmitter<YoutubeResponseItemModel[] | null>();

  getYoutubeData(event: Event) {
    event.preventDefault();
    this.youtubeData = this.response;

    // if promise вернул валидные значение, то true и пускать данные дальше
    this.hasSearchResult = true;
    this.hassearchResultChange.emit(this.youtubeData.items);
  }
}
