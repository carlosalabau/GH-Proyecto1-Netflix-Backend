# GeeksHubs-GH1---Netflix

## Introduccion

> Servidor creado con NodeJS, Express y Sequelize como ORM de Base de datos.  
El proyecto consiste en crear una web de peliculas donde se gestionan usuarios, peliculas y pedidos.
Con el servidor crearemos todo lo relacionado con las rutas para que desde la vista puede gestionarlo todo a traves de los endpoints.
Para ver las rutas de los endPoints tienes que dirigirte a la carpeta routes y ver cada una de las secciones.
Encontraras mas informacion de lo que hace la ruta en su controlador correspondiente ubicado en la carpeta controllers.
### Aqui podras comprobar, como es la ruta que tienes que introducir y que metodo es usado en el controlador.
~~~
router.post('/agregar', autenticacion, PedidosController.NuevoPedido);
~~~
## Muestras de codigo

#### Aquí os muestro un ejemplo de endpoint para añadir una nueva pelicula.
~~~
async NuevaPelicula(req,res){
        try{
            const pelis = req.body;
            const pelicula = await Peliculas.create({...pelis});
            await pelicula.addGeneros(req.body.GeneroId);
            await pelicula.addActores(req.body.ActorId);
            res.send(pelicula);
        }
        catch(error){
            res.status(500).send({mensaje: 'Problema al crear la pelicula'});
            console.log(error)
        }
        
    }
~~~  
#### Y aqui un ejemplo para listar todos los usuarios.
~~~
async ListarUsuarios(req,res){
        try {
            const usuarios = await Usuarios.findAll();
            res.send(usuarios);
        } catch (error) {
            console.log(error);
            res.status(401).send({mensaje: 'No es posible listar usuarios'})
        }
    }
~~~
#### Para poder añadir una pelicula deberas enviar los datos a traves de la siguiente ruta:
~~~
localhost:3000/peliculas/agregar
~~~
#### Para listar todos los usuarios:
~~~
localhost:3000/usuarios
~~~

## Middleware

Este servidor tiene creado un middleware para verificar que el usuario se ha logueado y puede acceder a las opciones protegidas, como alquilar peliculas.

## Instalación

#### Para este proyecto hemos usado dependencias npm como:  
* express-generator
* sequelize
* mysql2

#### Lo primero que tienes que hacer es clonar el proyecto en una carpeta de tu equipo:
~~~
git clone https://github.com/carlosalabau/GH-Proyecto1-Netflix-Backend.git
~~~
####  Para instalar las dependencias usaremos el siguiente comando: 
~~~
npm install (Con esto nos instalara todas las dependencias necesarias)
~~~  
#### Una vez lo tengas todo listo tendras que iniciar el servidor para que se genere la base de datos, con el siguiente comando:
~~~
npm start
~~~
#### Recuerda instalarte un servidor Apache como Wamp, si usas windows, o Lamp si usas Linux.

#### Como opcional puedes descargarte la aplicacion **Postman**, para poder hacer consultas a la API. Ten en cuenta que los datos los recibe en JSON.
