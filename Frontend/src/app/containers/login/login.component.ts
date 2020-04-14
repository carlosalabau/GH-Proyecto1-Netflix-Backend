import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: {
  };
  constructor(
    public userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  addUserLogin(userform: NgForm){
    this.users = userform.value;
    this.userService.setNewLogin(this.users)
    .subscribe(msn => console.log(this.users));
    this.router.navigate(['/movie']);
        }

}
