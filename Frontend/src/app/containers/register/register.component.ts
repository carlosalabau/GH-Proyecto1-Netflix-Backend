import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
users: {
};
  constructor(
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService,
    ) { }

  ngOnInit(): void {
  }
  register(registerform: NgForm) {
    if (!registerform.valid) {
      return this.notification.warning('Empty field', 'completa todo anda`');
    }
    if (registerform.controls.password.errors?.pattern) {
      return this.notification.warning('Wrong password', 'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 20 characters');
    }
    if (registerform.controls.password.value !== registerform.controls.repeatPassword.value){
       return this.notification.warning('wrong coincidence', 'no erers capaz de poner dos contraseñas iguales`');
    }
    {
      this.userService.setNewRegister(registerform.value)
        .subscribe(() => {
          this.notification.success('User created', 'User successfully created', { nzDuration: 2000 });
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        (error: HttpErrorResponse) => {
           // tslint:disable-next-line: no-string-literal
          this.notification.error('Wrong register', error.error['mensaje']);
        });

  }

  }
}

