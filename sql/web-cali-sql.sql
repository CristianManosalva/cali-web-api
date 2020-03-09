--tabla model, registro de datos de los models.
DROP TABLE IF EXISTS model CASCADE;
CREATE TABLE model
(
    id_model INTEGER PRIMARY KEY GENERATED BY DEFAULT  AS IDENTITY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    location_model VARCHAR(50),
    birthdate DATE NOT NULL,  
    estado INTEGER  NOT NULL--para manejar el borrado logico: 0--> inactivo|1-->activo.
);


--tabla para el score, atributo multivaludado.
DROP TABLE IF EXISTS score_model CASCADE;
CREATE TABLE score
(
    id_score INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    score_model INTEGER  NOT NULL,
    id_model INTEGER NOT NULL,
    FOREIGN KEY (id_model) REFERENCES model(id_model) ON DELETE CASCADE
);