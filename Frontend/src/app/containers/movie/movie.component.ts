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
    this.listMovie = movies;
    this.getActores();
    this.getGenre();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listMovie.length; i++) {

      this.Genre[i] = this.listMovie[i].Generos;
    }
    console.log(movies, this.Genre, this.Genre[1][0].tipo);
},
 err => console.log(err)
);
}

getActores(){
  this.movieServices.getActores()
  .subscribe((actores: any) => {
    this.allActors = actores;
    console.log(this.allActors[0].nombre);
  }, err => console.log(err)
  );
}

catchSelection(){
this.seeSelect = this.optionSelect;
console.log(this.seeSelect);
}

getGenre(){
  this.movieServices.getAllGenre()
  .subscribe((genre: any) => {
    this.allGenre = genre;
    console.log(this.allGenre[0].tipo);
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

setMovie(taskform: NgForm){
  this.movieServices.setMovie(taskform.value)
  .subscribe((movies: any) => {
    console.log(movies);
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



