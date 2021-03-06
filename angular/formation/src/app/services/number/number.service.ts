import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  public getNumbers(): Observable<number[]> {
    return new Observable<number[]>((subscriber: Subscriber<number[]>) => {
      subscriber.next(this.numbers);

      setTimeout(() => {
        subscriber.next(this.numbers.map((value) => value + 10));
      }, 2000);
      setTimeout(() => {
        subscriber.next(this.numbers.map((value) => (value + 10) * 10));

        subscriber.complete();
      }, 4000);
    });
  }
}
