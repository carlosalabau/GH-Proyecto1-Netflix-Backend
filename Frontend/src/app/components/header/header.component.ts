import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public usersService: UsersService,
              private router: Router,
              private notification: NzNotificationService) { }


ngOnInit(): void {
  this.usersService.getUser();
  console.log(this.usersService.getUser());
  }


  logout(){
    const token = localStorage.getItem('authToken');
    this.usersService.userLogout(token)
    .subscribe((res: any) => {
       // tslint:disable-next-line: no-string-literal
      this.notification.success('Successfully Logout', res['message']);
      localStorage.removeItem('authToken');
      this.usersService.setUser(null);
      setTimeout(() => this.router.navigate(['/']), 2000);
    },
    (error: HttpErrorResponse) => {
      console.error(error);
      this.notification.error('Wrong Logout', 'There was a problem trying to log in');
    });
  }
}
