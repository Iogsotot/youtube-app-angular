import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { SearchResultService } from '../../feature/youtube/services/search-result.service';
import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { CardModel } from '../card/models/card.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  private searchSubject = new Subject<string>();

  private ngUnsubscribe = new Subject<void>();

  searchForm: FormGroup;

  searchResults: CardModel[] = [];

  constructor(
    private youtubeApiService: YoutubeApiService,
    private fb: FormBuilder,
    private searchResultService: SearchResultService
  ) {
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.searchSubject
      .pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(600),
        distinctUntilChanged(),
        switchMap((query: string) => this.youtubeApiService.searchVideos(query))
      )
      .subscribe((response) => {
        this.searchResultService.setCards(response);
        this.searchResults = response;
      });
  }

  onInput(): void {
    const inputValue = this.searchForm.value.search;
    if (inputValue.length >= 3) {
      this.searchSubject.next(inputValue);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
