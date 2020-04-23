import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

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
  }


  logout(){
    const token = localStorage.getItem('authToken');
    this.usersService.userLogout(token)
    .subscribe((res: any) => {
      this.notification.success('Successfully Login', res['message']);
      localStorage.setItem('authToken', res['token']);
      this.usersService.setUser(res['user']);
      setTimeout(() => this.router.navigate(['/']), 2000);
    },
      (error) => {
        console.error(error);
    });
  }
}
