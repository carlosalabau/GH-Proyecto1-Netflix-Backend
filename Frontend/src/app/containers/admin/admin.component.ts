import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { MoviesService } from '../../services/movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // uploadedFiles: Array <File>;
  //  formData;
  constructor(
    public userService: UsersService,
    public movieService: MoviesService
    ) { }
showMovies = false;
showUsers = false;
showGenre = false;
showActors = false;
showOrders = false;
id = 0;
listMovie = {};
listUsers: {} ;
listGenre = {};
listActors = {};
listOrders = {};


ngOnInit(): void {
  this.getAllMovies();
  this.getAllusers();
  this.getAllActors();
  this.getAllGenre();
  }
//#region  getALL
setIdMovie(index){
 this.id = this.listMovie[index].id;
 this.movieService.setId(this.id);
}
setIdUser(index){
  // this.id = this.listUsers[index].id;
  // console.log(index);
  this.userService.setId(index);
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

 getAllGenre(){
  this.movieService.getAllGenre()
  .subscribe(
    genre => {
      this.listGenre = genre;
      console.log(this.listGenre);
  },
   err => console.log(err)
  );
 }

 getAllActors(){
  this.movieService.getAllActors()
  .subscribe(
    actors => {
      this.listActors = actors;
      console.log(this.listActors);
  },
   err => console.log(err)
  );
 }

 getAllusers(){
  const token = localStorage.getItem('authToken');
  this.userService.getAllUsers(token)
  .subscribe(
    users => {
      this.listUsers = users;
      console.log(this.listUsers);
  },
   err => console.log(err)
  );
 }

getAllOrders(){

}

//#endregion

//#region AddAll
addActors(actorsform: NgForm){
  const token = localStorage.getItem('authToken');
  this.movieService.setActor(actorsform.value, token)
  .subscribe(
    actors => {
      this.listActors = actors;
      console.log(this.listActors);
      this.getAllActors();
  },
   err => console.log(err)
  );
}

addGenre(genreform: NgForm){
  const token = localStorage.getItem('authToken');
  this.movieService.setGenre(genreform.value, token)
  .subscribe(
    genre => {
      this.listGenre = genre;
      console.log(this.listGenre);
      this.getAllGenre();
  },
   err => console.log(err)
  );
}
//#endregion

//#region deleteAll
deleteActors(i: number){
  const token = localStorage.getItem('authToken');
  this.movieService.deleteActor(this.listActors[i].id, token)
  .subscribe(
    actors => {
      console.log(actors);
      this.getAllActors();
  },
   err => console.log(err)
  );
}

deleteGenre(i: number){
  const token = localStorage.getItem('authToken');
  this.movieService.deleteGenre(this.listGenre[i].id, token)
  .subscribe(
    genre => {
      console.log(genre);
      this.getAllGenre();
  },
   err => console.log(err)
  );
}

deleteMovie(index: number){
  this.id = this.listMovie[index].id;
  const token = localStorage.getItem('authToken');
  this.movieService.deleteMovie(this.id, token)
  .subscribe(
    movie => {
      console.log(movie);
      this.getAllMovies();
  },
   err => console.log(err)
  );
}
deleteUser(index: number){
  this.id = this.listUsers[index].id;
  const token = localStorage.getItem('authToken');
  this.userService.deleteUser(this.id, token)
  .subscribe(
    users => {
      console.log(users);
      this.getAllusers();
  },
   err => console.log(err)
  );
}
// }
//#endregion

//#region show info

  showAllMovies(){
this.showMovies = !this.showMovies;
}


showAllUsers(){
this.showUsers = !this.showUsers;
}
showAllActors(){
  this.showActors = !this.showActors;
  }

showAllGenre(){
  this.showGenre = !this.showGenre;
  }

showAllOrders(){
    this.showOrders = !this.showOrders;
    }

//#endregion


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
