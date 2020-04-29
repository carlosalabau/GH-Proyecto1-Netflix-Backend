import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HelperServiceService } from '../../services/helper-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: {  };
  // message: string;
  // editMessage: string;
  constructor(
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService,
    private helper: HelperServiceService
    ) { }

  ngOnInit(): void {
    // this.helper.customMessage.subscribe(msg => this.message = msg);
 }

//  changeMessage() {
//   this.helper.changeMessage(this.editMessage);
// }

  loginIn(userform: NgForm) {
    if (!userform.valid){
        return this.notification.warning('Empty field', 'completa todo anda`');
      }
    {
      this.userService.setNewLogin(userform.value)
        .subscribe((res: HttpResponse<object>) => {
          // tslint:disable-next-line: no-string-literal
          this.notification.success('Successfully Login', res['mensaje']);
          // tslint:disable-next-line: no-string-literal
          localStorage.setItem('authToken', res['token']);
           // tslint:disable-next-line: no-string-literal
           console.log(res['usuario'],(res['usuario'].rol));
           this.userService.setRol((res['usuario'].rol)); 
          this.userService.setActualUser(res['usuario']);
          setTimeout(() => this.router.navigate(['/movie']), 2000);
        },
          (error: HttpErrorResponse) => {
            console.error(error);
            this.notification.error('Wrong Login', 'There was a problem trying to log in');
          });
    }
  }

 }
