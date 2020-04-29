import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
genreId = [];
actorId = [];
cont = 0;
contA = 0;
  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addMovie(movieform: NgForm){
    const token = localStorage.getItem('authToken');
    movieform.value.GeneroId = this.genreId;
    movieform.value.ActorId = this.actorId;
    console.log(movieform.value);
    this.movieService.setMovie(movieform.value, token)
    .subscribe(
      movie => {
        console.log(movie);
        setTimeout(() => this.router.navigate(['/admin']), 2000);
    },
     err => console.log(err)
    );
  }

  addGenre(movieform: NgForm){
    this.genreId[this.cont] = movieform.value.GeneroId;
    this.cont++;
    console.log(this.genreId);
}
addActor(movieform: NgForm){
  this.actorId[this.contA] = movieform.value.ActorId;
  this.contA++;
  console.log(this.actorId);
}
}
