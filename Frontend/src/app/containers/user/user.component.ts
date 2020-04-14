import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: any;
  constructor(public userService: UsersService) { }
  ngOnInit(): void {
    this.getAllUser();
     }

    getAllUser(){
  this.userService.getAll()
  // tslint:disable-next-line: no-shadowed-variable
  .subscribe(( user: any) =>
      {
        this.userList = user;
      },
      err => console.log(err)
      );
 }

  updateUser(taskform: NgForm, i: number){
    this.userService.updateUser(taskform.value, i)
    .subscribe(msn => this.getAllUser());
            }

   addNewUser(taskform: NgForm){
    this.userService.setNewLogin(taskform.value)
    .subscribe(msn => this.getAllUser());
          }

  delTask(i: number){
    this.userService.deleteUser(i)
    .subscribe(msn => this.getAllUser());

  }
}
