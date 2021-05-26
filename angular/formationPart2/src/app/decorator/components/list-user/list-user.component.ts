import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.users.push(
      'John',
      'Jane',
      'Marie',
      'Eduard',
      'Albert',
      'Sophie',
      'Elisabeth'
    );
  }
  public refresh(): void {
    this.users.push('William', 'Oscar', 'Chloé', 'Julie');
  }
}
