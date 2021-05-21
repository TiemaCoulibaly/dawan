import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  state = false;
  constructor(
    private authentication: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state = this.authentication.isAuthenticate();
  }
  public login(): void {
    this.state = this.authentication.login();

    if (this.route.snapshot.queryParamMap.has('redirectTo')) {
      this.router.navigateByUrl(
        this.route.snapshot.queryParamMap.get('redirectTo')!
      );
    }
  }
  public logout(): void {
    this.state = this.authentication.logout();
  }
}
