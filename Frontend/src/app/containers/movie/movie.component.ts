import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {NgForm} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(
    public movieServices: MoviesService,
    private sanitizer: DomSanitizer,
    public usersService: UsersService) { }


listMovie ;
Genre = [] ;
allGenre = [];
allActors = [];
seeSelect: string;
optionSelect = '0';


  ngOnInit(): void {
    this.getAllMovies();
  }

  getImgContent(imgurl): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${imgurl})`);
}

getAllMovies(){
this.usersService.getUser();
this.movieServices.getAllMovies()
.subscribe(
  movies => {
    console.log(movies);
     this.listar(movies);
},
 err => console.log(err)
);
}

listar(movies){
  this.listMovie = movies;
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.listMovie.length; i++) {
    this.Genre[i] = this.listMovie[i].Generos;
  }
  this.getAllGenre();
  this.getActores();
}

getActores(){
  this.seeSelect = this.optionSelect;
  this.movieServices.getActores()
  .subscribe((actores: any) => {
    this.allActors = actores;
    console.log(this.allActors[0].nombre);
  }, err => console.log(err)
  );
}

getGenre(){
  this.seeSelect = this.optionSelect;
  this.movieServices.getMovieGenre(this.seeSelect)
  .subscribe((genre: any) => {
    console.log(genre);
    this.listar(genre);
  }, err => console.log(err)
  );
}
getAllGenre(){
  this.movieServices.getAllGenre()
  .subscribe(
    genre => {
    this.allGenre = genre;
  }, err => console.log(err)
  );
}

getEstrenos(){
  this.movieServices.getEstrenos()
  .subscribe((movies: any) => {
    console.log(movies);
  }, err => console.log(err)
  );
}
setactualMovie(movie: any){
this.movieServices.setactualMovie(movie);
console.log(this.usersService.getUser()[0].id);
this.usersService.setId(this.usersService.getUser()[0].id);
}


getTitleMovie(titleform: NgForm){
  if(!titleform.value.titulo){
    this.getAllMovies();
    return ;
  }
  this.movieServices.getTitulo(titleform.value)
  .subscribe((movies: any) => {
    this.listar(movies.titulo);
  }, err => console.log(err)
  );
}
}



