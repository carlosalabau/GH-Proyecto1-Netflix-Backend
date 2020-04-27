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

 data = moment();
moviesDetall ;
pedidosList ;
title;
newUser ;
selectMovie = [] ;
Genre = [] ;
Actors = [];
str: string;

  constructor(
    public detallsServices: MoviesService,
    public userService: UsersService,
    private router: Router,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getDetails();
    this.getPedidos();
    this.str= this.data.add(3, 'days').calendar();
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

   setPedidos(){
    let pedido = {fechaDevolucion: this.str, PeliculaId: this.selectMovie[0].id}
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
