import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css'],
})
export class CustomPipeComponent implements OnInit {
  users = [
    'Willy',
    'Tyfannia',
    'Baptiste',
    'Clément',
    'Aymane',
    'Denis',
    'Sébastien',
    'Avotra',
    'Tiema',
    'Burkhan',
    'Mathieu',
    'Medhi',
    'Sébastien',
    'Skander',
  ];
  test = ['a', 'b', 'c'];
  order = 'asc';
  constructor() {}

  ngOnInit(): void {}
}
