import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
users = [];
list = [];
colOrder1 = [];
colOrder2 = [];
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
      this.list = this.list[this.users["id"] - 1].Pedidos;
      console.log(this.list);
      this.movieOrder();
  },
   err => console.log(err)
  );
}
checkstat(i){
    if (this.list[i].estado === 'pendiente') {
      console.log(this.list[i].estado);
      return true;
    }
    else {
      console.log(this.list[i].estado);
      return false;
     }
}

setEnd(i){
  const token = localStorage.getItem('authToken');
  this.movieServices.setEstado(this.list[i].id, token)
  .subscribe((estado: any) => {
          console.log(estado);
},
(error: HttpErrorResponse) => {
 console.error(error);
});
}


movieOrder(){
  for (let i = 0; i < this.list.length; i++) {

  this.movieServices.getAllMoviesId(this.list[i].PeliculaId)
  .subscribe((movie: any) => {
              if (i < this.list.length / 2)
              {this.colOrder1[i] = movie;
            }
             else{
              this.colOrder2[i - this.list.length / 2] = movie;
             }
              console.log(this.colOrder1, this.colOrder1.length);
},
(error: HttpErrorResponse) => {
 console.error(error);
});
}
}
}
