DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE pais (
	id serial primary key,
	nombre varchar(70)
);

CREATE TABLE provincia (
	id serial primary key,
	nombre varchar(70),
	pais_id integer references pais
);

CREATE TABLE ciudad (
	id bigserial primary key,
	nombre varchar(70),
	provincia_id integer references provincia
);

CREATE TABLE rol (
	id serial primary key,
	nombre varchar
);

CREATE TABLE usuario (
	id serial primary key,
	nombres varchar,
	apellidos varchar,
	direccion varchar,
	telefono varchar,
	email varchar,
	password varchar,
	fecha_nacimiento date,
	dni varchar (9),
	ciudad_id bigint references ciudad,
	rol_id integer references rol,
	carrito_id integer
);

CREATE TABLE carrito (
	id serial primary key,
	usuario_id integer references usuario
);

ALTER TABLE usuario 
ADD CONSTRAINT carrito_fk Foreign Key (carrito_id) REFERENCES carrito;

CREATE TABLE categoria (
	id serial primary key,
	nombre varchar,
	padre_id integer references categoria
);

CREATE TABLE producto (
	id serial primary key,
	titulo varchar,
	descripcion text,
	precio real,
	stock integer,
	categoria_id integer references categoria
);

CREATE TABLE linea_carrito (
	id serial primary key,
	cantidad integer,
	carrito_id integer references carrito,
	producto_id integer references producto
);

CREATE TABLE imagen_producto (
	id serial primary key,
	path text,
	producto_id integer references producto
);

CREATE TABLE valoracion (
	id serial primary key,
	texto text,
	fecha date,
	cantidad_estrellas integer,
	producto_id integer references producto,
	usuario_id integer references usuario
);

CREATE TABLE envio (
	id serial primary key,
	direccion varchar,
	costo real,
	entregado boolean,
	codigo_seguimiento varchar,
	pedido_id integer
);

CREATE TABLE pedido (
	id serial primary key,
	fecha date,
	total real,
	pagado boolean,
	usuario_id integer references usuario,
	envio_id integer references envio
);

ALTER TABLE envio 
ADD CONSTRAINT pedido_fk Foreign Key (pedido_id) REFERENCES pedido;

CREATE TABLE item_pedido (
	id serial primary key,
	cantidad integer,
	pedido_id integer references pedido,
	producto_id integer references producto
);

-- pais provincia ciudad rol usuario carrito categoria producto linea_carrito imagen_producto valoracion envio pedido item_pedido

-- node_modules\.bin\sequelize-auto -o "./src/models" -d postgres -h db.tdqxxsoeovdeofheblvo.supabase.co -u postgres -p 5432 -x admintpfinal2023 -e postgres -t pais provincia ciudad rol usuario carrito categoria producto linea_carrito imagen_producto valoracion envio pedido item_pedido -l esm