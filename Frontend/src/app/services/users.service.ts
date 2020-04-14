import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>('http://localhost:3000/usuarios');
  }

    // POST
    setNewRegister(body: any){
      return this.http.post<any>('http://localhost:3000/usuarios/registro', body);
    }
    setNewLogin(body: any){
      return this.http.post<any>('http://localhost:3000/usuarios/login', body);
    }
    setNewLogout(body: any){
      return this.http.post<any>('http://localhost:3000/usuarios/logout', body);
    }

    // PUT
  updateUser(body: any, id: number){
    return this.http.put<any>(`http://localhost:3000/usuarios/actualizar/${id}`, body);
  }
  // DELETE
    deleteUser(id: number){
      return this.http.delete(`http://localhost:3000/ususarios/eliminar/${id}`);
    }
}
