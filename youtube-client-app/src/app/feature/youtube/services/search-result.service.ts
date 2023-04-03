import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeResponseItemModel, YoutubeResponseModel } from '../models/youtube.model';
import * as mockResponse from '../../../../mocks/response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private cardsResponse?: YoutubeResponseModel;

  private cards?: YoutubeResponseItemModel[];

  private cardsResponseSubject: Subject<YoutubeResponseModel> = new Subject<YoutubeResponseModel>();

  private cardsSubject: Subject<YoutubeResponseItemModel[]> = new Subject<
    YoutubeResponseItemModel[]
  >();

  private setCards(value: YoutubeResponseItemModel[]) {
    this.cardsSubject.next(value);
  }

  public getCardsResponse() {
    const response: YoutubeResponseModel = mockResponse;

    this.cardsResponse = response;
    this.cardsResponseSubject.next(response);
    this.cardsSubject.next(this.cardsResponse?.items);

    return this.cardsResponseSubject.asObservable();
  }

  public getCards() {
    const response: YoutubeResponseModel = mockResponse;
    this.cards = response.items;
    this.cardsSubject.next(response.items);
    return this.cardsSubject.asObservable();
  }
}
