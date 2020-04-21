import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user = '' ;
  constructor(private http: HttpClient) { }

  // GET
  getUserId(id: number){
    return this.http.get<any>(`http://localhost:3000/usuarios/${id}`);
  }
  getPedidosUser(id: number){
    return this.http.get<any>(`http://localhost:3000/usuarios/pedidos${id}`);
  }
  getUserLogout(){
    return this.http.get<any>('http://localhost:3000/usuarios/logout');
  }

    // POST
    setNewRegister(body: any){
      return this.http.post<any>('http://localhost:3000/usuarios/registro', body);
    }
    setNewLogin(body: any){
      this.user = body.email;
      console.log(this.user);
      return this.http.post<any>('http://localhost:3000/usuarios/login', body);
    }
    // PUT
  updateUser(body: any, id: number){
    return this.http.put<any>(`http://localhost:3000/usuarios/actualizar/${id}`, body);
     }
  // DELETE
    deleteUser(id: number){
      return this.http.delete(`http://localhost:3000/usuarios/eliminar/${id}`);
     }


  uploadFile(formData){
  const urlApi = 'localhost....';
  return this.http.post(urlApi, formData);
      }
// pedidos
getAllOrder(){
  return this.http.get<any>('http://localhost:3000/pedidos');
}
getPickOrder(){
  return this.http.get<any>('http://localhost:3000/pedidos/recogida');
}
getReturnOrder(){
  return this.http.get<any>('http://localhost:3000/pedidos/devolucion');
}
}
