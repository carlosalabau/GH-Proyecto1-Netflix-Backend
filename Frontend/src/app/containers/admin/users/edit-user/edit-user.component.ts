import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  infouser = [];
  id = 0;

  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  this.getUsers();
}
getUsers(){
  const token = localStorage.getItem('authToken');
  this.userService.getAllUsers(token)
    .subscribe(
  users => {console.log(this.userService.getId());
            this.infouser[0] = users[this.userService.getId()-1];
            console.log(this.infouser[0]);
  },
   err => console.log(err)
  );
  }
  editUsers(Usersform){
    this.id = this.infouser[0].id;
    console.log(this.id);
    const token = localStorage.getItem('authToken');
    this.userService.updateUser(Usersform.value, this.id , token)
    .subscribe(
      movie => {
        console.log(movie);
        setTimeout(() => this.router.navigate(['/admin']), 2000);
    },
     err => console.log(err)
    );
  }

}
