import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css'],
})
export class LocaleComponent implements OnInit {
  locale = '';
  devise = '';

  date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
