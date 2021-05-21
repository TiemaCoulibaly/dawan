import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  user$?: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.user$ = this.getAsyncUser();
  }

  getAsyncUser() {
    return of({
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 35,
      homeWorld: 'Tatooine'
    }).pipe(delay(2000));
  }

}