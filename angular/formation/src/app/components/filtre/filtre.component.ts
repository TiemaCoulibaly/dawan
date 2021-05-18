import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css'],
})
export class FiltreComponent implements OnInit {
  pi = Math.PI;
  today = new Date();
  constructor() {}

  ngOnInit(): void {}
}
