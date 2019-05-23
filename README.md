5.	Generar informe de los resultados en el formato de prácticas. Debe incluir:
a.	El diagrama E-R de la solución propuesta.
    ![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/1.png)
    b.	Nombre de la base de datos
NOMBRE DE LA BASE: CORREO
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/2.png)
    c.	Sentencias SQL de la estructura de la base de datos
                              CREAR UN USUARIO
CREATE TABLE usuario (
usu_id INT(11) NOT NULL AUTO_INCREMENT,
usu_nombres VARCHAR(50) NOT NULL,
usu_apellidos VARCHAR(50) NOT NULL,
usu_correo VARCHAR(35) NOT NULL,
usu_password VARCHAR(255) NOT NULL,
usu_rol VARCHAR(5) NOT NULL,
usu_eliminado TINYINT NOT NULL DEFAULT 0,
usu_fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
usu_fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
usu_foto_perfil VARCHAR(100) NULL DEFAULT NULL,
PRIMARY KEY (usu_id),
UNIQUE KEY usu_foto_perfil_UNIQUE (usu_foto_perfil ASC)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1

CREAR UN MENSAJE
CREATE TABLE mensaje (
men_id INT(11) NOT NULL AUTO_INCREMENT,
usuario_usu_id_de INT(11) NOT NULL,
usuario_usu_id_para INT(11) NOT NULL,
men_titulo VARCHAR(245) NOT NULL,
men_contenido TEXT NULL,
men_fecha TIMESTAMP NULL,
men_eliminado TINYINT NOT NULL DEFAULT 0,
PRIMARY KEY (men_id),
INDEX fk_mensaje_usuario_idx (usuario_usu_id_de ASC),
INDEX fk_mensaje_usuario1_idx (usuario_usu_id_para ASC),
CONSTRAINT fk_mensaje_usuario
FOREIGN KEY (usuario_usu_id_de)
REFERENCES correo.`usuario` (usu_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT fk_mensaje_usuario1
FOREIGN KEY (usuario_usu_id_para)
REFERENCES correo.`usuario` (usu_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

                              
d.	El desarrollo de cada uno de los requerimientos antes descritos.
e.	La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cuál, se puede generar fotografías instantáneas (pantallazos).
Usuario con rol de user:

a)	Visualizar en su pagina principal (index.php) el listado de todos los mensajes electrónicos recibidos, ordenados por los más recientes.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/3.png)
i)	Enviar mensajes electrónicos a otros usuarios de la aplicación web.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/4.png)
j)	Buscar todos los mensajes electrónicos recibidos. La búsqueda se realizará por el correo del usuario remitente y se deberá aplicar Ajax para la búsqueda.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/5.png)
k)	Buscar todos los mensajes electrónicos enviados. La búsqueda se realizará por el correo del usuario destinatario y se deberá aplicar Ajax para la búsqueda.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/6.png)
p)	Modificar los datos del usuario.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/7.png)
q)	Cambiar la contraseña del usuario.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/8.png)
r)	Agregar un avatar (fotografía) a la cuenta del usuario.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/9.png)
Usuario con rol de admin:

s)	No puede recibir ni enviar mensajes electrónicos.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/10.png)
t)	Visualizar en su pagina principal (index.php) el listado de todos los mensajes electrónicos, ordenados por los más recientes.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/10.png)
u)	Eliminar los mensajes electrónicos de los usuarios con rol “user”.
f.	Eliminar, modificar y cambiar contraseña de los usuarios con rol “user”.
![1](https://github.com/paulogonzalez5679/Practica04-Mi-Correo-Electr-nico/blob/master/screens/11.png)
CONCLUSIONES:
•	El uso de Ajax no facilita la búsqueda y ordenamiento de diferentes tipos de variables de una base de datos en una tabla.
•	Siempre debemos verificar las ubicaciones de nuestros archivos ya que se pueden generar errores de lectura.
•	Al enviar mensajes las sentencias de bases de datos son quienes obtiene los datos y mediante métodos de GET y POST obtenemos esos datos en HTML 
•	Para la obtención de las imágenes .IMG es muy útil para HTML
•	Los problemas que aparezcan que no se han encontrado datos o datos vacíos dependerá de cómo sea la obtención de nuestros datos con las sentencias 

  
