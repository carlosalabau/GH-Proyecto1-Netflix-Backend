
## Comenzando 🚀

_El presente proyecto está enfocado al público; en el mismo se le permitirà visualizar las peliculas por género, actores y una minuciosa búsqueda por título. Para ello hemos realizado diversas pestañas donde el usuario le sera fácil desplazarse, propiciandole nuevos estrenos de peliculas las que se irán agragando gradualmente._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_-Se necesitaría un dispositivo conectado a internet y que contenga una memoria ram preferiblemente mayor o igual a 4GB_
_Debes prescindir de una cuenta de mail para proceder al registro y asi obtener la posibilidad de renta y una mayor visualización de las peliculas_
### Código a destacar
``` 
 getPedidos(){
    const token = localStorage.getItem('authToken');
    this.userService.getPedidosUser(this.userService.getId(), token)
    .subscribe((res: any) => {
        this.pedidosList = res;
        this.idMovie = this.pedidosList[0].Pedidos[0].PeliculaId;
        this.getMoviePedidos();
   },
   (error: HttpErrorResponse) => {
     console.error(error);
     this.notification.error('Wrong order id', 'There was a problem trying to get orders');
   });
 }
 
``` 
_En este pequeño código se obtendrá los pedidos realizado por el usuario. obteniendo de localstorage su autentificación correspondiente. Al obtener el id de su pedido, corresponde identificar que pelicula tiene en ese pedido para asi mostrar los resultados de la misma ._
```
deleteGenre(i: number){
  const token = localStorage.getItem('authToken');
  this.movieService.deleteGenre(this.listGenre[i].id, token)
  .subscribe(
    genre => {
      this.getAllGenre();
  },
   err => console.log(err)
  );
}
```
### Servicio
```
deleteGenre(id: number, token): Observable<any> {
    console.log(id);
    return this.http.delete(environment.API_URL + `/generos/eliminar/${id}`, {
        headers: {
          Authorization: token
        }
      });
  }
```
_En este otro pequeño código se procede a eliminar un género, esta claro que solo podrá realizarse siendo administrador el mismo, por lo que se accede al servicio enviando el id del género a eliminar y la autentifición adecuada para poder realizar dicha operación. Una vez llegado al servcio se envia a la bas de datos la información requerida, dicha en este caso el id por parametro y el token (autentifición)_
### Instalación 🔧

_No requiere de instalación ya que posteriormente se crearán aplicaciones para los diversos sistemas operativos, teniendo la compatibildad adecuada._

### Y las pruebas de estilo de codificación ⌨️

_Se realizó diversos filtros que fueron capaz de poner a prueba la aplicación trayendo consigo unos resultados favorables, se le implementará umn formulario donde el usuario podra manifestrar sus inquietudes y de esa manera  mejor aun mas nuesto servicio_


## Construido con 🛠️


* [Angular cli] - Permite la creación de prácticamente todo el proyecto de frontend. Mediante le mismo se crearon servicios, módulos, componentes, modelos, eventos.  
### Instalación 🔧    
```npm install -g @angular/cli ```
* [Bootswatch] - Se utilizó como variante de Boostrap, usando el tema de "simplex", ayudando mucho a la parte de estilización y que sea responsive la app.
### Instalación 🔧 
``` https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/simplex/bootstrap.min.css ```
## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/carlosalabau/GH-Proyecto1-Netflix-Backend/blob/master/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autores ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)
* **Carlos Alabau Herrera** - *Trabajo Inicial* - [carlosalabau](https://github.com/carlosalabau)