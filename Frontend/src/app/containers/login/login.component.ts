import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import EventBus from 'src/app/bus/EventBus';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: {  };
  showALert = false;

  constructor(
    public userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  addUserLogin(userform: NgForm){
    this.users = userform.value;
    this.userService.setNewLogin(this.users)
    .subscribe(
      res => {
              console.log(this.users);
              localStorage.setItem('token', res.token);
              EventBus.getInstance().emit('onloggin', undefined);
              this.router.navigate(['/movie']);
        },

          err => {
            console.log(err);
            this.showALert = !this.showALert;
        }
        );
      }
 }
