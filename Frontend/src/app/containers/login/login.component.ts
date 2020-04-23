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
    if((this.userService.user["email"] !== userform.controls.email) || (this.userService.user["password"] !== userform.controls.password)){
    return this.notification.warning('Denied', 'inutil!!! no te sabes tus credenciales');
  }

    {
      this.userService.setNewLogin(userform.value)
        .subscribe((res: HttpResponse<object>) => {
          this.notification.success('Successfully Login', res['message']);
          localStorage.setItem('authToken', res['token']);
          this.userService.setUser(res['user']);
          EventBus.getInstance().emit('onloggin', undefined);
          setTimeout(() => this.router.navigate(['/movie']), 2000);
        },
          (error: HttpErrorResponse) => {
            console.error(error);
          });
    }
  }

 }
