import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
actualMovie = {};
  constructor(private http: HttpClient) { }

  // GET
  getAllMovies(){
    return this.http.get<any>('http://localhost:3000/peliculas');
  }
  getEstrenos(){
    return this.http.get<any>('http://localhost:3000/peliculas/estrenos');
  }
  getActores(){
    return this.http.get<any>('http://localhost:3000/peliculas/actores');
  }
  getTitulo(titulo: string){
    return this.http.get<any>(`http://localhost:3000/peliculas/titulos/${titulo}`);
  }
  // POST
  setMovie(body: any){
    return this.http.post<any>('http://localhost:3000/peliculas/agregar', body);
  }
   // PUT
   updateMovie(body: any, id: number){
    return this.http.put<any>(`http://localhost:3000/peliculas/actualizar/${id}`, body);
  }

  // DELETE
  deleteMovie(id: number){
      return this.http.delete(`http://localhost:3000/peliculas/${id}`);
  }

  // Genero
  getAllGenre(){
    return this.http.get<any>('http://localhost:3000/generos');
  }
  setGenre(body: any){
    return this.http.post<any>('http://localhost:3000/generos/agregar', body);
  }
   updateGenre(body: any, id: number){
    return this.http.put<any>(`http://localhost:3000/generos/editar/${id}`, body);
  }

  deleteGenre(id: number){
      return this.http.delete(`http://localhost:3000/generos/eliminar/${id}`);
  }
  // Actores
  getAllActors(){
    return this.http.get<any>('http://localhost:3000/actores');
  }
  setActor(body: any){
    return this.http.post<any>('http://localhost:3000/actores/agregar', body);
  }
   updateActor(body: any, id: number){
    return this.http.put<any>(`http://localhost:3000/actores/editar/${id}`, body);
  }

  deleteActor(id: number){
      return this.http.delete(`http://localhost:3000/actores/eliminar/${id}`);
  }

  getactualMovie(movie: any): object{
this.actualMovie = movie;

return;
  }


}
