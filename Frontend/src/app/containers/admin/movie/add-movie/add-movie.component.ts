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

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addMovie(movieform: NgForm){
    const token = localStorage.getItem('authToken');
    this.movieService.setMovie(movieform.value, token)
    .subscribe(
      movie => {
        console.log(movie);
        setTimeout(() => this.router.navigate(['/admin']), 2000);
    },
     err => console.log(err)
    );
  }
}
