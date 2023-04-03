import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private myValue: boolean = false;

  private myValueSubject = new Subject<boolean>();


  public toggle() {
    const temp = !this.myValue;
    this.myValue = temp;
    this.myValueSubject.next(temp);
  }

  public getState() {
    return this.myValueSubject.asObservable();
  }
}
