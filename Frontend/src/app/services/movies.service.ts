import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
actualMovie = {};
id = 0;
  constructor(private http: HttpClient) { }

getId(){
return this.id;
}

setId(id: number){
  this.id = id;
}
  // GET
  getAllMovies(){
    return this.http.get<any>(environment.API_URL + '/peliculas');
  }
  getAllMoviesId(id){
    return this.http.get<any>(environment.API_URL + `/peliculas/${id}`);
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
    setMovie(body: any, token): Observable<any> {
      console.log(body);
      return this.http.post<any>(environment.API_URL + '/peliculas/agregar', body, {
      headers: {
        Authorization: token
      }
    });
  }
   // PUT
   updateMovie(body: any, id, token): Observable<any> {
     console.log(body, `/peliculas/actualizar/${id}`);
     return this.http.put<any>(environment.API_URL + `/peliculas/actualizar/${id}`, body, {
      headers: {
        Authorization: token
      }
    });
  }

  // DELETE
  deleteMovie(id: number, token): Observable<any> {
      return this.http.delete(environment.API_URL + `/peliculas/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
  }

  // Genero
  getMovieGenre(genre: string){
    console.log(genre);
    return this.http.get<any>(environment.API_URL + `/peliculas/generos/${genre}`);
  }
  getAllGenre(){
    return this.http.get<any>(environment.API_URL + '/generos');
  }
  setGenre(body, token): Observable<any> {
    return this.http.post<any>(environment.API_URL + '/generos/agregar', body, {
      headers: {
        Authorization: token
      }
    });
  }


  deleteGenre(id: number, token): Observable<any> {
    console.log(id);
    return this.http.delete(environment.API_URL + `/generos/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
  }
  // Actores
  getAllActors(){
    return this.http.get<any>(environment.API_URL + '/actores');
  }
  setActor(body, token): Observable<any> {
    console.log(body);
    return this.http.post<any>(environment.API_URL + '/actores/agregar', body, {
      headers: {
        Authorization: token
      }
    });
  }
   updateActor(body: any, id: number){
    return this.http.put<any>(environment.API_URL + '/actores/editar/`${id}`', body);
  }

  deleteActor(id: number, token){
    console.log(id);
      // tslint:disable-next-line: align
      return this.http.delete(environment.API_URL + `/actores/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
  }

  setactualMovie(movie: any): object{
  this.actualMovie = movie;
  return;
  }
getactualMovie(){
  return this.actualMovie;
}

}
