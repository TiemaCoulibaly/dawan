import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit(): void {}

  // ligne 40 directive.html
  public getMessage(): string | null {
    if (this.show) {
      return 'Hello world';
    }
    return null;
  }
}
