# cali-web-api #
Sistema de administracion para la organizacion Cali Web

## Rutas api -- Consideraciones de la prueba de conocimiento ##

### Se implemento el uso de middleware para el manejo de errores y tambien para la validacion de datos de entrada. ###

El sistema debe permitir conocer las edades, localización geográfica, edad, y género de los modelos.
Se definio la entidad modelos de la siguiente manera.
```bash
  {
    "first_name":"MalcomX",
    "last_name":"Myers",
    "user_name":"gmyers3",
    "email":"gmyers3@mtv.com",
    "gender":"Male",
    "location_model":"Cali",
    "birthdate":"1994-06-23T00:00:00.000Z",
    "state_user":"1" //optional field
  }
```
### URL's de acceso a los metodos idempotentes del CRUD ###
  
#### Create: metodo post ####
  
Crea un modelo en la base de datos, el cuerpo de la peticion a la api debe ser un json con los con los atributos del modelo. Los datos son validados mediante un middleware.
  
**Llamada a la api** : https://web-cali.now.sh/api/models

Body:
```bash
    body: {
      "first_name":"MalcomX",
      "last_name":"Myers",
      "user_name":"gmyers3",
      "email":"gmyers3@mtv.com",
      "gender":"Male",
      "location_model":"Cali",
      "birthdate":"1994-06-23T00:00:00.000Z",
      "state_user":"1" //optional field
     }
```
           
#### Read All: metodo get ####
  
Este llamado retorna toda la lista de modelos.
  
**Llamada a la api** : https://web-cali.now.sh/api/models
  
#### Read One: metodo get ####
  
Este llamado retorna un modelo en especifico segun su id. La llamada debe tener como parametro el id del modelo.
  
**Llamada a la api** : https://web-cali.now.sh/api/models/2

Parametro:
* **modelId:** el id del modelo que se desea consultar.
Ejemplo
*`https://web-cali.now.sh/api/models/2`

#### Update: metodo put ####

Actualiza un modelo en la base de datos, el cuerpo de la peticion a la api debe ser un json con los con los atributos del modelo. Se debe enviar como parametro el id del modelo a modificar. Los datos son validados mediante un middleware.

**Llamada a la api** : https://web-cali.now.sh/api/models/1

Parametro:
* **modelId:** el id del modelo que se desea actualizar.

Body:
```bash
    body: {
      "first_name":"MalcomX",
      "last_name":"Myers",
      "user_name":"gmyers3",
      "email":"gmyers3@mtv.com",
      "gender":"Male",
      "location_model":"Cali",
      "birthdate":"1994-06-23T00:00:00.000Z",
      "state_user":"1" //optional field
     }
```

#### Delete: metodo delete ####

Elimina un modelo en la base de datos,se debe enviar como parametro el id del modelo a modificar. Los datos son validados mediante un middleware.

**Llamada a la api** : https://web-cali.now.sh/api/models/1

Parametro:
* **modelId:** el id del modelo que se desea eliminar.

### Realizar puntaciones ###

Así mismo el sistema deberá permitir registrar la puntuación (0 a 5 estrellas),tenga presente que la puntuación puede ser actualizada y se desea poder conocer valores pasados asignados.

#### realizar puntuacion: metodo post ####

Registra una nueva puntuacion asosiada a un modelo. El cuerpo de la llamada debe contener el id del modelo que se desea puntuar y la puntuacion.

**Llamada a la api** : https://web-cali.now.sh/api/models/scoremodel

Body:
```bash
  body : {
            "modelId": 1,
	    "score_model": 2
         }
```


### Valor promedio de puntuacion por localizacion ###
El sistema deberá presentar el valor promedio (en estrellas) por localización de modelo redondeado a 1 décima

#### obtener promedio de puntuacion: meotodo get ####

**Llamada a la api** : https://web-cali.now.sh/api/models/get/score/average


### Poblar la base de datos ###
Se deberá poblar la base de datos para lo cual se recomienda usar seeders y factories con librerías cómo faker (los frameworks node mencionados anteriormente tienen soluciones similares).

Para la generacion de datos se utilizo la herramienta https://mockaroo.com/ El orm sequelize permite realizar migraciones de seeders.
