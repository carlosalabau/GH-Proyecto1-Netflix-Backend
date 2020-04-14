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
  setTask(body: any, id: number){
    return this.http.post<any>(`http://localhost:3000/usuarios/actualizar/${id}`, body);
  }
  // DELETE
    erase(id: number){
      return this.http.delete(`http://localhost:3000/ususarios/eliminar/${id}`);
    }


}
