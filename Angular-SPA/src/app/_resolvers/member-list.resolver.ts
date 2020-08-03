import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userSrvc: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userSrvc.getUsers().pipe(
      catchError((error) => {
        this.alertify.error('problem while retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
