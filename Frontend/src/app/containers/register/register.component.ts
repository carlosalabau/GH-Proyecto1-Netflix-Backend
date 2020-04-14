import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.models';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
users: {
};
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }
  addNewUser(userform: NgForm){
    this.users = userform.value;
    this.userService.setNewRegister(this.users)
    .subscribe(msn => console.log(this.users));
        }

  }



