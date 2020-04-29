import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
users = [];
  constructor(
    public userservice: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getDataUser();
    console.log(this.getDataUser())
  }
  getDataUser(){
    this.users[0] = this.userservice.getActualUser();
    console.log(this.users);
  }

  editProfile(userform: NgForm){
    const token = localStorage.getItem('authToken');
    this.userservice.updateUser(userform.value, token)
    .subscribe(
      usuario => {
        console.log(usuario);
        // setTimeout(() => this.router.navigate(['/user']), 2000);
    },
  
    );
  }
  
}
