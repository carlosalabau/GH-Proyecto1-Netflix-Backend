import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {NgForm} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(public movieServices: MoviesService, private sanitizer: DomSanitizer) { }
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
  .subscribe((genre: any) => {
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
getactualMovie(movie: any){
this.movieServices.getactualMovie(movie);
}

setMovie(titleform: NgForm){
  this.movieServices.setMovie(titleform.value)
  .subscribe((movies: any) => {
    console.log(movies);
  }, err => console.log(err)
  );
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

updateMovie(taskform: NgForm, i: number){
  this.movieServices.updateMovie(taskform.value, i)
  .subscribe((movies: any) => {
    console.log(movies);
  }, err => console.log(err)
  );
}

deleteMovie(i: number){
  this.movieServices.deleteMovie(i)
  .subscribe((movies: any) => {
    console.log(movies);
  }, err => console.log(err)
  );
}

}



