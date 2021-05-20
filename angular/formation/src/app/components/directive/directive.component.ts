import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  show = true;
  mode = '';

  payment = 'pending';
  progress = 10;
  bgcolor = 'red';
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('les directives');
  }

  // ligne 40 directive.html
  public getMessage(): string | null {
    if (this.show) {
      return 'Hello world';
    }
    return null;
  }
}
