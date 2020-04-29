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
 users = [];
 list = [];
  userList: any;
  constructor(public userService: UsersService) { }
  ngOnInit(): void {
    this.getDataUser();
    this.getPedidos();
  }
getDataUser(){
  this.users = this.userService.getActualUser();
  console.log(this.users);
}
getPedidos(){
  const token = localStorage.getItem('authToken');
  this.userService.getPedidosUser(this.users["id"], token)
  .subscribe(
    order => {
      this.list = order;
      this.userService.setCantPedidos(this.list);
      console.log(this.list)
      this.list = this.list[this.users["id"] - 1].Pedidos;
      console.log(this.list);
  },
   err => console.log(err)
  );
}
}
