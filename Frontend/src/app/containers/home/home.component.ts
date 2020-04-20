import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public movieServices: MoviesService) { }
  listMovie: [] ;
  cont = 0;
  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieServices.getAllMovies()
    .subscribe(
      movies => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].isEstreno) {
            this.listMovie = movies[i];
            // tslint:disable-next-line: no-unused-expression
            console.log(this.listMovie);
          }
        }
    },
    err => console.log(err)
   );
   }


}
