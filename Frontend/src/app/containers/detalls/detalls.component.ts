import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.component.html',
  styleUrls: ['./detalls.component.scss']
})
export class DetallsComponent implements OnInit {
moviesDetall ;
pedidosList ;
title;
newUser ;
selectMovie = [] ;
Genre = [] ;
Actors = [];
  constructor(public detallsServices: MoviesService, public userService: UsersService) { }
  ngOnInit(): void {
    this.getDetails();
    this.getPedidos();
    {}
  }
  getTitles(title: string){
    this.detallsServices.getTitulo(title)
    .subscribe((movies: any) => {
      console.log(movies);
    }, err => console.log(err)
    );
  }

  getDetails(){
   this.selectMovie[0] = this.detallsServices.actualMovie;
   this.Genre = this.selectMovie[0].Generos;
   this.Actors = this.selectMovie[0].Actores;
   console.log(this.Genre, this.Actors);
   }

   getPedidos(){
    this.newUser = this.userService.user;
    // this.title =  this.userService.getPedidosUser(this.newUser);
    console.log('aqui');
   }

}
