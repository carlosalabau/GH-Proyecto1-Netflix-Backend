import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(public movieServices: MoviesService) { }
listMovie: {};
  ngOnInit(): void {
    this.getAllMovies();
  }

getAllMovies(){
this.movieServices.getAllMovies()
.subscribe(
  movies => {
    this.listMovie = movies;
    console.log(this.listMovie);
},
 err => console.log(err)
);
}

getActores(){
  this.movieServices.getActores()
  .subscribe((movies: any) => {
    console.log(movies);
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

getTitles(title: string){
  this.movieServices.getTitulo(title)
  .subscribe((movies: any) => {
    console.log(movies);
  }, err => console.log(err)
  );
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



