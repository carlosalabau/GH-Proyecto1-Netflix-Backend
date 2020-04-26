import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
infomovie = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(){
  this.movieService.getAllMovies()
  .subscribe(
    movie => {
      this.infomovie[0] = movie[this.movieService.getId()-1];
      console.log(this.infomovie[0]);
  },
   err => console.log(err)
  );
  }
}