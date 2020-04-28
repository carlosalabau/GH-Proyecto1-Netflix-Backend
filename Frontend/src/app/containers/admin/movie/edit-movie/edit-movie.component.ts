import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { id_ID } from 'ng-zorro-antd';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  infomovie = [];
  titulo : string;
  id = 0;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovie();

  }

  getMovie(){
    this.movieService.getAllMovies()
    .subscribe(
      movie => {
        this.infomovie[0] = movie[this.movieService.getId()];
        this.titulo = this.infomovie[0].titulo;
        console.log(this.infomovie[0], this.titulo);
    },
     err => console.log(err)
    );
    }

editMovie(movieform){
  this.id = this.infomovie[0].id;
  console.log(this.id);
  const token = localStorage.getItem('authToken');
  this.movieService.updateMovie(movieform.value, this.id , token)
  .subscribe(
    movie => {
      console.log(movie);
      setTimeout(() => this.router.navigate(['/admin']), 2000);
  },
   err => console.log(err)
  );
}
}
