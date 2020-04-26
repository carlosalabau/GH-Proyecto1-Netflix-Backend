import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addUser(usersform){
    this.userService.setNewRegister(usersform.value)
    .subscribe(
      users => {
        console.log(users);
        setTimeout(() => this.router.navigate(['/admin']), 2000);
    },
     err => console.log(err)
    );
      }
  }

