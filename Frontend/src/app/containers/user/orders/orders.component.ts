import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
users = [];
list =[];
Pedidos = [];
  constructor(
    public userservice: UsersService
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
      console.log(this.list, this.list[this.users["id"]-1].Pedidos);
  },
   err => console.log(err)
  );
}

}
