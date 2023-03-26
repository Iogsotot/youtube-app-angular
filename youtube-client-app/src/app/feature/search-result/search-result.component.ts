import { Component, Input } from '@angular/core';
import { YoutubeResponseItemModel } from 'src/app/models/youtube.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input()
  cards: YoutubeResponseItemModel[] | null = null;
}
