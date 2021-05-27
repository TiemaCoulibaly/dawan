import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css'],
})
export class InterceptorComponent implements OnInit {
  users$?: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  public getUsers(): void {
    this.users$ = this.userService.finddAll();
  }
}
