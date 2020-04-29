import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, UserLogin } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
id = 0;
// tslint:disable-next-line: variable-name
public user: any;
public pedidos = [];
public userActual: any;
public rol: boolean;
  constructor(private http: HttpClient) { }



  getId(){
    return this.id;
    }

    setId(id: number){
      this.id = id;
      console.log(this.id);
    }
  //#region Get user
  getAllUsers(token){
    console.log();
    return this.http.get<any>(environment.API_URL + '/usuarios', {
      headers: {
        Authorization: token
      }
    });
  }
  getUserId(id: number){
    return this.http.get<any>(environment.API_URL + `/usuarios/${id}`);
  }
  getPedidosUser(id: number, token){
    return this.http.get<any>(environment.API_URL + `/usuarios/pedidos/${id}`, {
      headers: {
        Authorization: token
      }
    });
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
    console.log(PeliculaId, token);

    return this.http.post<any>(environment.API_URL + '/pedidos/agregar',  PeliculaId, {
      headers: {
        Authorization: token
      }
    });
  }
    getAllOrder(token){
      return this.http.get<any>(environment.API_URL + '/pedidos',{
        headers: {
          Authorization: token
        }
      });
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
     updateUser(body: any, token){
    return this.http.put<any>(environment.API_URL + 'usuarios/actualizar', body, {
      headers: {
        Authorization: token
      }
    });
     }

  // DELETE
    deleteUser(id: number, token){
      return this.http.delete(environment.API_URL + `/usuarios/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
     }

     deleteOrder(id: number, token){
      return this.http.delete(environment.API_URL + `/pedidos/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
     }
 //#region  get set user
     // tslint:disable-next-line: variable-name

     setCantPedidos(Pedidos){
      this.pedidos = Pedidos;
    }
    getCantPedidos(){
      return this.pedidos;
    }

    // tslint:disable-next-line: variable-name
    setUser(_user: any) {
      this.user = _user;
      }
    getUser(): any {
      console.log(this.user);
      return this.user;
      }
      setRol(_rol: string) {
        if (_rol === "Admin"){
            this.rol = true;
        }else {
          this.rol = false;
        }
        this.rol = this.rol;
        }
      getRol(): any {
        console.log(this.rol);
        return this.rol;
        }
  
      setActualUser(_user: any) {
        this.userActual = _user;
        }
      getActualUser(): any {
        console.log(this.userActual)
        return this.userActual;
        }
//#endregion
  // Load Imagen
  uploadFile(formData){
  const urlApi = 'localhost....';
  return this.http.post(urlApi, formData);
      }

}
