import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SortFieldModel, SortTypeEnum, SortFieldEnum } from '../models/sortResult.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private isOpen: boolean = false;

  private sortConfig: SortFieldModel = {
    type: SortTypeEnum.DESC,
    field: SortFieldEnum.VIEW,
  };

  private isOpenSubject: Subject<boolean> = new Subject<boolean>();

  private sortSubject: Subject<SortFieldModel> = new Subject<SortFieldModel>();

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.isOpenSubject.next(this.isOpen);
  }

  public getState(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }

  public setSortConfig(value: SortFieldModel): void {
    this.sortConfig = value;
    this.sortSubject.next(this.sortConfig);
  }

  public getSortConfig(): Observable<SortFieldModel> {
    return this.sortSubject.asObservable();
  }
}
