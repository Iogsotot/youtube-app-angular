import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardModel } from '../../../shared/card/models/card.models';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private cardsSubject: BehaviorSubject<CardModel[]> = new BehaviorSubject<CardModel[]>([]);

  setCards(videoWithStats: CardModel[]): void {
    this.cardsSubject.next(videoWithStats);
  }

  getCards(): Observable<CardModel[]> {
    return this.cardsSubject.asObservable();
  }
}
