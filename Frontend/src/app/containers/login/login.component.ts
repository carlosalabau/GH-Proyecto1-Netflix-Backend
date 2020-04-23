import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import EventBus from 'src/app/bus/EventBus';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: {  };

  constructor(
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService
    ) { }

  ngOnInit(): void {
 }

  loginIn(userform: NgForm) {
    if (!userform.valid){
        return this.notification.warning('Empty field', 'completa todo anda`');
      }
    {
      this.userService.setNewLogin(userform.value)
        .subscribe((res: HttpResponse<object>) => {
          this.notification.success('Successfully Login', res['message']);
          localStorage.setItem('authToken', res['token']);
          this.userService.setUser(res['user']);
          setTimeout(() => this.router.navigate(['/movie']), 2000);
        },
          (error: HttpErrorResponse) => {
            console.error(error);
            this.notification.error('Wrong Login', 'There was a problem trying to log in');
          });
    }
  }

 }
