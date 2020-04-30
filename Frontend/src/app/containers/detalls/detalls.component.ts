import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {UsersService} from '../../services/users.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import { Pedido } from '../../models/user.models';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.component.html',
  styleUrls: ['./detalls.component.scss']
})
export class DetallsComponent implements OnInit {
// pedido: Pedido;
idMovie : number;
moviePedido = [];
 data = moment();
moviesDetall ;
pedidosList = [] ;
title;
newUser ;
selectMovie = [] ;
Genre = [] ;
Actors = [];
fechaDev: string;
fechaRec: string;
cities = [
   {city: 'Valencia', days: 1},
   {city: 'Malaga', days: 2},
   {city: 'Sevilla', days: 3}
];
day = 0;
  constructor(
    public movieServices: MoviesService,
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getDetails();
    this.getPedidos();
    console.log(this.cities[1].city);
    this.fechaRec = this.data.format();
    console.log(this.fechaRec);

  }
  getTitles(title: string){
    this.movieServices.getTitulo(title)
    .subscribe((movies: any) => {
      console.log(movies);
    }, err => console.log(err)
    );
  }

  getDetails(){
   this.selectMovie[0] = this.movieServices.getactualMovie();
   this.Genre = this.selectMovie[0].Generos;
   this.Actors = this.selectMovie[0].Actores;
   console.log(this.Genre, this.Actors);
   }

   getPedidos(){
    const token = localStorage.getItem('authToken');
    this.userService.getPedidosUser(this.userService.getId(), token)
    .subscribe((res: any) => {
        this.pedidosList = res;
        this.idMovie = this.pedidosList[0].Pedidos[0].PeliculaId;
        this.getMoviePedidos();
        console.log(this.pedidosList[0]);
        this.notification.success('Successfully order', res['mensaje']);

   },
   (error: HttpErrorResponse) => {
     console.error(error);
     this.notification.error('Wrong order', 'There was a problem trying to orders');
   });
 }

 getMoviePedidos(){
  console.log(this.idMovie);
  this.movieServices.getAllMoviesId(this.idMovie)
  .subscribe((movie: any) => {
              this.moviePedido[0] = movie;
              console.log(this.moviePedido[0], movie);
},
(error: HttpErrorResponse) => {
 console.error(error);
});
}
   setPedidos(){
     // tslint:disable-next-line: prefer-for-of
     for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].city === this.pedidosList[0].ciudad) {
        this.day = this.cities[i].days;
      }
     }
     console.log(this.day);
     this.fechaDev = this.data.add(this.day, 'days').calendar();
     console.log(this.fechaDev);
     const pedido = {fechaRecogida: this.fechaRec, fechaDevolucion: this.fechaDev,  PeliculaId: this.selectMovie[0].id};
     const token = localStorage.getItem('authToken');
    // console.log(this.fecha);
     this.userService.setNewOrder(pedido, token)
    .subscribe((res: any) => {
       // tslint:disable-next-line: no-string-literal
      //  console.log(res.id);
      this.notification.success('Successfully order', res['mensaje']);
      setTimeout(() => this.router.navigate(['movie']), 2000);

    },
    (error: HttpErrorResponse) => {
      console.error(error);
      this.notification.error('Wrong order', 'There was a problem trying to orders');
    });
  }

}
