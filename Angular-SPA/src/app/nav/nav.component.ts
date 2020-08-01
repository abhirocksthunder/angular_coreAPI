import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
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
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out succeesfully');
    this.router.navigate(['/home']);
  }
}
