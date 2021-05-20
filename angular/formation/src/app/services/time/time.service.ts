import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  id?: number;
  constructor() {}

  public getTime(): Observable<Date> {
    return new Observable<Date>((subscriber: Subscriber<Date>) => {
      subscriber.next(new Date());
      this.id = setInterval(() => {
        let date = new Date();
        subscriber.next(date);
      }, 1000);
    });
  }
  public clearInterval(): void {
    clearInterval(this.id);
  }
}
