import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // uploadedFiles: Array <File>;
  //  formData;
  constructor(
    private userService: UsersService,
    private movieService: MoviesService
    ) { }
showMovies = false;
showUsers = false;
showMoviesDetaills = false;
showUsersDetaills = false;
listMovie = {};
listUsers = {};

ngOnInit(): void {
  this.getAllMovies();
  this.getAllusers();
  }

getAllMovies(){
  this.movieService.getAllMovies()
  .subscribe(
    movies => {
      this.listMovie = movies;
      console.log(this.listMovie);
  },
   err => console.log(err)
  );
 }

 getAllusers(){
  this.userService.getAllUsers()
  .subscribe(
    users => {
      this.listUsers = users;
      console.log(this.listUsers);
  },
   err => console.log(err)
  );
 }

showAllMovies(){
this.showMovies = !this.showMovies;
}
showAllMoviesDetaills(){
  this.showMoviesDetaills = !this.showMoviesDetaills;
}

showAllUsers(){
this.showUsers = !this.showUsers;
}

showAllUsersDetaills(){
  this.showUsersDetaills = !this.showUsersDetaills;
}

// upload(){
// let  formData = new formData();
// // tslint:disable-next-line: prefer-for-of
// for (let i = 0; i < this.uploadedFiles.length; i++) {
// formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
// }
// this.adminServices.uploadFile(formData).subscribe((res) => {
// console.log(res);
// });

// }
// filechange(e){
// this.uploadedFiles = e.target.files;
// }

}


// https://www.youtube.com/watch?v=-BVrRGrBhBA