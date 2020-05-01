import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users = [];
list = [];
Order = [];
Pedidos = [];
  constructor(
    public userservice: UsersService,
    public movieServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getDataUser();
    this.getPedidos();
  }
getDataUser(){
  this.users = this.userservice.getActualUser();
  console.log(this.users);
}
getPedidos(){
  const token = localStorage.getItem('authToken');
  this.userservice.getPedidosUser(this.users["id"], token)
  .subscribe(
    order => {
      this.list = order;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === this.users['id'] ) {
        this.list = this.list[i].Pedidos;
        }
      }
      this.userservice.setCantPedidos(this.list)
      console.log(this.list);
      this.movieOrder();
  },
   err => console.log(err)
  );
}

movieOrder(){
  for (let i = 0; i < this.list.length; i++) {


  this.movieServices.getAllMoviesId(this.list[i].PeliculaId)
  .subscribe((movie: any) => {
              this.Order[i] = movie;

},
(error: HttpErrorResponse) => {
 console.error(error);
});
}
}
}
