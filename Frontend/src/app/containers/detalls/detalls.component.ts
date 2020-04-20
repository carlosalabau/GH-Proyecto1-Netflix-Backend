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
  constructor(public detallsServices: MoviesService, public userService: UsersService) { }

  ngOnInit(): void {
  }
  getTitles(title: string){
    this.detallsServices.getTitulo(title)
    .subscribe((movies: any) => {
      console.log(movies);
    }, err => console.log(err)
    );
  }

  getPedido(id: number){
    this.userService.getPedidosUser(id)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(( user: any) =>
        {
          this.pedidosList = user;
        },
        err => console.log(err)
        );
   }

}
