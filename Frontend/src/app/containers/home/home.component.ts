import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {NgForm} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public movieServices: MoviesService, private sanitizer: DomSanitizer) { }
  listMovie = [] ;
  Genre = [] ;
  cont = 0;
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
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].isEstreno) {
            this.listMovie.push(movies[i]);
            this.Genre[i] = this.listMovie[i].Generos;
            // tslint:disable-next-line: no-unused-expression
            console.log(this.listMovie);
          }
        }
    },
    err => console.log(err)
   );
   }


}
