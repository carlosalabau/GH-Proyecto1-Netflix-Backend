import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  infouser = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    const token = localStorage.getItem('authToken');
    this.userService.getAllUsers(token)
      .subscribe(
    users => {console.log(this.userService.getId(),users[1]);
        this.infouser[0] = users[this.userService.getId()];
        console.log(this.infouser[0]);
    },
     err => console.log(err)
    );
    }

}
