import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user = '' ;
private _user: any;
  constructor(private http: HttpClient) { }

  // GET
  getUserId(id: number){
    return this.http.get<any>(`http://localhost:3000/usuarios/${id}`);
  }
  getPedidosUser(id: number){
    return this.http.get<any>(environment.API_URL + `/usuarios/pedidos${id}`);
  }
  getUserLogout(){
    return this.http.get<any>(environment.API_URL + 'usuarios/logout');
  }

  getInfo(token): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/usuarios', {
      headers: {
        Authorization: token
      }
    });
  }

    // POST
      setNewRegister(body: any){
        console.log(body);
      return this.http.post<any>(environment.API_URL + '/usuarios/registro', body);
    }
    setNewLogin(body: any){
      this.user = body.email;
      console.log(body);
      return this.http.post<any>(environment.API_URL + '/usuarios/login', body);
    }
    // PUT
  updateUser(body: any, id: number){
    return this.http.put<any>(environment.API_URL + `usuarios/actualizar/${id}`, body);
     }
  // DELETE
    deleteUser(id: number){
      return this.http.delete(environment.API_URL + `/usuarios/eliminar/${id}`);
     }
     setUser(_user: any) {
      this._user = _user;
    }
    getUser(): any {
      return this._user;
    }

  uploadFile(formData){
  const urlApi = 'localhost....';
  return this.http.post(urlApi, formData);
      }
// pedidos
getAllOrder(){
  return this.http.get<any>(environment.API_URL + '/pedidos');
}
getPickOrder(){
  return this.http.get<any>(environment.API_URL + '/pedidos/recogida');
}
getReturnOrder(){
  return this.http.get<any>(environment.API_URL + '/pedidos/devolucion');
}
}
