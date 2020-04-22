import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
actualMovie = {};
  constructor(private http: HttpClient) { }

  // GET
  getAllMovies(){
    return this.http.get<any>(environment.API_URL + '/peliculas');
  }
  getEstrenos(){
    return this.http.get<any>(environment.API_URL + '/peliculas/estrenos');
  }
  getActores(){
    return this.http.get<any>(environment.API_URL + '/actores');
  }
  getTitulo(titulo: string){
    return this.http.get<any>(environment.API_URL + `/peliculas/titulo/${titulo['titulo']}`);

  }
  // POST
  setMovie(body: any){
    return this.http.post<any>(environment.API_URL + '/peliculas/agregar', body);
  }
   // PUT
   updateMovie(body: any, id: number){
    return this.http.put<any>(environment.API_URL + '/peliculas/actualizar/`${id}`', body);
  }

  // DELETE
  deleteMovie(id: number){
      return this.http.delete(environment.API_URL + '/peliculas/`${id}`');
  }

  // Genero
  getMovieGenre(genre: string){
    console.log(genre)
    return this.http.get<any>(environment.API_URL + `/peliculas/generos/${genre}`);
  }
  getAllGenre(){
    return this.http.get<any>(environment.API_URL + `/generos`);
  }
  setGenre(body: any){
    return this.http.post<any>(environment.API_URL + '/generos/agregar', body);
  }
   updateGenre(body: any, id: number){
    return this.http.put<any>(environment.API_URL + '/generos/editar/`${id}`', body);
  }

  deleteGenre(id: number){
      return this.http.delete(environment.API_URL + '/generos/eliminar/`${id}`');
  }
  // Actores
  getAllActors(){
    return this.http.get<any>(environment.API_URL + '/actores');
  }
  setActor(body: any){
    return this.http.post<any>(environment.API_URL + '/actores/agregar', body);
  }
   updateActor(body: any, id: number){
    return this.http.put<any>(environment.API_URL + '/actores/editar/`${id}`', body);
  }

  deleteActor(id: number){
      return this.http.delete(environment.API_URL + '/actores/eliminar/`${id}`');
  }

  getactualMovie(movie: any): object{
this.actualMovie = movie;

return;
  }


}
