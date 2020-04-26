import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, UserLogin } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user = '' ;
// tslint:disable-next-line: variable-name
private _user: any;
  constructor(private http: HttpClient) { }

  //#region Get user
  getAllUsers(token){
    console.log()
    return this.http.get<any>(`http://localhost:3000/usuarios`, {
      headers: {
        Authorization: token
      }
    });
  }
  getUserId(id: number){
    return this.http.get<any>(`http://localhost:3000/usuarios/${id}`);
  }
  getPedidosUser(id: number){
    return this.http.get<any>(environment.API_URL + `/usuarios/pedidos${id}`);
  }
  userLogout(token): Observable<any>{
    return this.http.get<any>(environment.API_URL + '/usuarios/logout', {
      headers: {
        Authorization: token
      }
    });
  }

  getInfo(token): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/usuarios', {
      headers: {
        Authorization: token
      }
    });
  }

//#endregion
  //#region Get Pedidos
  setNewOrder( PeliculaId , token){

    return this.http.post<any>(environment.API_URL + '/pedidos/agregar',  PeliculaId, {
      headers: {
        Authorization: token
      }
    });
  }
    getAllOrder(){
      return this.http.get<any>(environment.API_URL + '/pedidos');
      }

    getReturnOrder(){
      return this.http.get<any>(environment.API_URL + '/pedidos/devolucion');
      }
  //#endregion
  //#region POST register login password
    setNewRegister(body: any){
        console.log(body);
        return this.http.post<any>(environment.API_URL + '/usuarios/registro', body);
    }
    setNewLogin(body: UserLogin){
      this.user = body.email;
      return this.http.post<any>(environment.API_URL + '/usuarios/login', body);
    }

    resetPassword(password, recoverToken) {
      return this.http.post(environment.API_URL + '/users/resetPassword', {recoverToken, password });

    }
//#endregion

    // UPDATE
     updateUser(body: User, id: number){
    return this.http.put<any>(environment.API_URL + `usuarios/actualizar/${id}`, body);
     }

  // DELETE
    deleteUser(id: number){
      return this.http.delete(environment.API_URL + `/usuarios/eliminar/${id}`);
     }
 //#region  get set user
     // tslint:disable-next-line: variable-name
    setUser(_user: any) {
      this._user = _user;
      }
    getUser(): any {
      return this._user;
      }
//#endregion
  // Load Imagen
  uploadFile(formData){
  const urlApi = 'localhost....';
  return this.http.post(urlApi, formData);
      }

}
