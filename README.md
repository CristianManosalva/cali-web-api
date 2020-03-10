# cali-web-api
Sistema de administracion para la organizacion Cali Web

## Rutas api -- Consideraciones de la prueba de conocimiento

### Se implemento el uso de middleware para el manejo de errores y tambien para la validacion de datos de entrada.

> El sistema debe permitir conocer las edades, localización geográfica, edad, y género de los modelos
  Se implemento un crud de para la entidad modelos: 
  ```code
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
  URL's de acceso a los metodos idempotentes del CRUD
  ```bash
  Create: metodo post, acompañado de un body con la siguiente estructura:
    url: https://web-cali.now.sh/api/models
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
           
  Read: metodo get, acompañado del parametro modelId, que hace referencia a la identificacion del modelo
    url: https://web-cali.now.sh/api/models/1
    reponse: {
            "id": 1
            "first_name":"MalcomX",
            "last_name":"Myers",
            "user_name":"gmyers3",
            "email":"gmyers3@mtv.com",
            "gender":"Male",
            "location_model":"Cali",
            "birthdate":"1994-06-23T00:00:00.000Z",
            "state_user":"1" //optional field
           }
  Update: metodo put, acompañado del parametro modelId, que hace referencia a la identificacion del modelo y el body
    url: https://web-cali.now.sh/api/models/1
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
           
  Delete: metodo delete, acompañado del parametro modelId, que hace referencia a la identificacion del modelo
    url: https://web-cali.now.sh/api/models/1
    reponse: {
            "model deleted"
           }
  ```

>Así mismo el sistema deberá permitir registrar la puntuación (0 a 5 estrellas),tenga presente que la puntuación puede ser actualizada y se desea poder conocer valores pasados asignados.

```bash
  Realizar una puntuacion: se debe envia un metodo Post, acompañado de un body con la siguiente structura:
  url: https://web-cali.now.sh/api/models/scoremodel
  body : {
            "modelId": 1,
	          "score_model": 2
         }
```

>El sistema deberá presentar el valor promedio (en estrellas) por localización
de modelo redondeado a 1 décima

```bash
  Obtener Promedio por localizacion: se debe enviar un metodo get.
  url: https://web-cali.now.sh/api/models/get/score/average
  body : {
            "modelId": 1,
	          "score_model": 2
         }
```

>Se deberá poblar la base de datos para lo cual se recomienda usar seeders y factories con librerías cómo faker (los frameworks node mencionados anteriormente tienen soluciones similares)

```bash
  Para la generacion de datos se utilizo la herramienta https://mockaroo.com/
  El orm sequelize permite realizar migraciones de seeders
```
