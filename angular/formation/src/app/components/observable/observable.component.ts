import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import { NumberService } from 'src/app/services/number/number.service';
import { TimeService } from 'src/app/services/time/time.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  //numbers: number[]=[]
  numbers: Array<number> = [];

  disabled = false;
  message = '';

  time?: Date; //setInterval()
  subscription?: Subscription;

  constructor(
    private title: Title,
    private numberService: NumberService,
    private timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Les observables');
    this.subscription = this.timeService.getTime().subscribe((time: Date) => {
      this.time = time;
    });
  }
  public synchroniser(): void {
    this.numbers = [];
    this.disabled = true;
    this.message = '';
    this.numberService.getNumbers().subscribe(
      (numbers: number[]) => {
        this.numbers = numbers;
      },
      (error: any) => {},
      () => {
        this.message = 'Synchronisation terminé';
        this.disabled = false;
      }
    );
  }

  public subject(): void {
    const subject = new Subject<string>();
    subject.next('1er valeur');

    subject.subscribe((value) => {
      console.log(`la valeur de subject est ${value}`);
    });
    subject.next('2eme valeur');
    subject.next('3eme valeur');
    subject.complete();
  }

  public behaviorSubject(): void {
    const subject = new BehaviorSubject<string>('Valeur initiale');
    subject.subscribe((value) => {
      console.log(`la valeur de behavior Subject est ${value}`);
    });
    subject.next('2eme valeur');
    subject.next('3eme valeur');
    subject.complete();
  }
  public replaySubject(): void {
    const subject = new ReplaySubject<string>(2);
    subject.next('1er valeur');
    subject.next('2eme valeur');
    subject.next('3eme valeur');
    subject.subscribe((value) => {
      console.log(`la valeur de replaySubject est ${value}`);
    });
    subject.next('4eme valeur');
    subject.next('5eme valeur');
    subject.complete();
  }
  ngOnDestroy(): void {
    this.timeService.clearInterval();
    this.subscription?.unsubscribe();
  }
}
