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
}
