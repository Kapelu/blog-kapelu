---
title: 'My first post'
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
date: '2010-07-02'
modified_date: '2020-02-02'
image: /assets/images/posts/random-img.jpg
---

# Pasos para crear un script bash

* Crear el archivo con extension .sh
  
  ```bash
  cd $HOME && echo 'Hola Mundo!' > hello.sh 
  ```
  ![crear-script-bash](https://raw.githubusercontent.com/Kapelu/blog-kapelu/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-01.png?token=GHSAT0AAAAAACQXCBN4P5PZI35IY4AWJ7BIZQ3OIVA)
    Esto creara un archivo en el Home llamado hello.sh

* Abrir el archivo y agregar la linea shebang `#!/bin/bash` en la linea 1. Cuando incluyes la línea  `#!/bin/bash` en la parte superior de tu script, el sistema sabe que quieres usar bash como intérprete para tu script. Por lo tanto, ahora puedes ejecutar el script hello.sh directamente 

* Agregar comandos a partir de la linea 2 `echo '¡Hola, mundo!'`

* Añadir permisos chmod desde la terminal 
  
  ```bash
  chmod 711 hello.sh
  ```
  
     o usar esta pagina para calcular permisos chmod https://linuxhandbook.com/chmod-calculator/

* Si quieres ejecutar tu script bash desde cualquier lugar, como si fuera un comando normal primero debes saber la ruta donde esta creado el script, esto lo haces con el comando `pwd`
  
  ```bash
  pwd
  ```
  
    una vez sabiendo esto añade la ubicación de tu script de shell a la variable PATH. 
  
  ```bash
  export PATH=$PATH:/home/user
  ```
  
    Ahora bien, si quieres crear una carpeta donde se van a alojar todos tus Script y añadir desde ahi todos al PATH solo tienes que agregar el nombre de la carpeta al final de archivo `/home/user/.bashrc` en este caso la llamaremos `Script`
  
  ```bash
  export PATH=$PATH:/home/user/Script
  ```