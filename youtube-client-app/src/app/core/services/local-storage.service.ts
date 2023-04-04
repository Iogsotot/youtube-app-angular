/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageSub: Subject<string | null> = new Subject<string | null>();

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
        this.storageSub.next(event.key);
      }
    });
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  getStorageChanges(): Observable<string | null> {
    return this.storageSub.asObservable();
  }
  
  get(key: string): string | null {
    const value = localStorage.getItem(key);
    return value || null;
  }
}
