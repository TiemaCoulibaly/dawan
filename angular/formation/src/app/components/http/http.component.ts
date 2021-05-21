import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  users$?: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  public getUsers(): void {
    this.users$ = this.userService.getAllUsers();
  }
}
