import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  listMovie =[];
  cantOrders: number;
  users = [];
  usr = [];
listOrder = [];
  constructor(
    public userservice: UsersService,
    public movieService: MoviesService
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
  this.userservice.getPedidosUser(this.usr["id"], token)
  .subscribe(
    order => {
      this.listOrder = order;
      console.log(order);
      this.searchPedidos();
  },
   err => console.log(err)
  );
}

searchPedidos(){
  console.log(this.listOrder[0]["id"], this.usr["id"]);
   for (let i = 0; i < this.listOrder.length; i++) {
   if (this.listOrder[i].id = this.usr["id"])
   this.usr = this.listOrder[i].Pedidos;
 }
 this.getNameMovie();
}

getNameMovie(){
  this.movieService.getAllMovies()
  .subscribe(
    movies => {
      this.listMovie = movies;
      console.log(this.listMovie);
      this.getName();
  },
   err => console.log(err)
  );
 }

getName(){
  console.log(this.usr[0].id, this.listMovie[0]["id"] )
  for (let j = 0; j < this.listMovie["length"]; j++) {
   for (let i = 0; i < this.usr.length; i++) {
    if (this.usr[i].id = this.listMovie[j]["id"])
    this.usr = this.listMovie[j].Titulo;
  }
}
  console.log(this.usr);
}


}
