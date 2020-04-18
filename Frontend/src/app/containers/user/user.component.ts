import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
showProfile = true;
showEditProfile = false;
showPedidos = false;

  userList: any;
  constructor(public userService: UsersService) { }
  ngOnInit(): void {
     }

    getUser(id: number){
  this.userService.getUserId(id)
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
    .subscribe(msn =>  console.log(msn));
  }

   addNewUser(taskform: NgForm){
    this.userService.setNewLogin(taskform.value)
    .subscribe(msn =>  console.log(msn));
   }

  delUser(i: number){
    this.userService.deleteUser(i)
    .subscribe(msn => console.log(msn));
  }

showprofile(){
  this.showEditProfile = false;
  this.showPedidos = false;
  this.showProfile = true;
}
showEditprofile(){
  this.showEditProfile = true;
  this.showPedidos = false;
  this.showProfile = false;
}
showpedidos(){
  this.showEditProfile = false;
  this.showPedidos = true;
  this.showProfile = false;
}
}
