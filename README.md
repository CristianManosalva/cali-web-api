# cali-web-api
Sistema de administracion para la organizacion Cali Web

## Rutas api -- Consideraciones de la prueba de conocimiento
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
    url: /api/models
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
    url: /api/models/1
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
    url: /api/models/1
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
    url: /api/models/1
    reponse: {
            "model deleted"
           }
  ```

>Sin embargo la app se desplego con los servcios hosting de zeit.co, usando su herramienta CLI (now), es una aplicacion responsive, por tanto puede ser accedida desde un telefono movil.

>Enlace a la aplicacion https://serverdata.now.sh
