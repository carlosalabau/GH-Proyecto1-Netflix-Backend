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



