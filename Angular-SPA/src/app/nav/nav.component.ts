import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  loggedIn() {
    return this.authService.loggedIn();
  }

  login() {
    this.authService.login(this.model).subscribe(
      (res) => {
        this.alertify.success('Logged in Successfully');
      },
      (err) => {
        this.alertify.error(err);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out succeesfully');
  }
}
