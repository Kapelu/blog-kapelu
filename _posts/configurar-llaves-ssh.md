---
title: 'Configurar llaves SSH en github'
description: Como crear llaves ssh configurarlas en nuestro sistema y agregarlas a github
date: '2021-05-09'
modified_date: '2021-02-02'
tag: 'github'
image: '../public/assets/images/posts/configurar-claves-ssh/'
---


En nuestra consola de git bash(Windows) o nuestra consola (Linux) nos movemos a home, por que las llaves pueden ser para todos los proyectos en los que trabajemos.

Luego generamos las llaves con ssh-keygen seguidos de los parámetros: -t aquí ponemos el algoritmo de encriptación que queremos en este caso ocuparemos la más común que es RSA, -b aquí vamos a especificar que tan compleja es la llave, seguido de -C aquí vamos a poner el email al que se va a configurar la llave.

```js
ssh-keygen -t rsa -b 4096 -C “tu_email@gmail.com”
```

Nos pide la ruta en la que se va a guardar las credenciales, en este caso damos enter, para que las guarde en home:

![configurar clave SSH](https://raw.githubusercontent.com/Kapelu/blog-kapelu/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-01.png?token=GHSAT0AAAAAACQXCBN4P5PZI35IY4AWJ7BIZQ3OIVA)

Después nos pide una contraseña con espacios (es recomendable ponerla)

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-02.png?raw=true)

Volvemos a ingresar la contraseña:

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-03.png?raw=true)

Nos genera la llave privada: id_rsa en una carpeta oculta .ssh dentro del directorio home y la llave pública id_rsa.pub

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-04.png?raw=true)

Una vez obtenido el resultado sabremos que hemos creado nuestras llaves (pública y privada) SSH satisfactoriamente:

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-05.png?raw=true)

Para comprobarlo escribimos el comando:
```js
ls -al ~/.ssh
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-06.png?raw=true)

Debemos evaluar si está corriendo el servidor de ssh:
```js
eval $(ssh-agent -s)
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-07.png?raw=true)

Agregar la llave privada a Git (Nos pide el password que le dimos con espacios).
```js
ssh-add ~/.ssh/id_rsa
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-08.png?raw=true)

Nos aseguramos de copiar el contenido de nuestra llave SSH pública (id_rsa.pub)
lo podemos hacer con el uso de vi o nano:
```js
vi ~/.ssh/id_rsa.pub
```
Copiamos el contenido. (Salimos con esc+shift+zz)

# Agregando las llaves a github

Debemos de ir a nuestro GitHub → settings → SSH and GPG Keys → New SSH Key

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-09.png?raw=true)

En title ponemos algo que identifique la Lap o el computador que estemos usando, en key pegamos lo que copiamos de nuestra llave pública:

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-10.png?raw=true)

Damos click a Add SSH Key, podemos ver que nos agregó una nueva llave con el nombre que le dimos, pero aún no se ha usado.

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-11.png?raw=true)

Copiamos la llave pública de cualquiera de nuestros repositorio de GitHub (Clone with SSH)

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-12.png?raw=true)

Tenemos que posicionarnos en el proyecto que copiamos la llave SSH pública de GitHub y con el siguiente comando podemos ver a qué repositorio apunta nuestro proyecto:
```js
git remote -v
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-13.png?raw=true)

Seteamos la ruta
```js
git remote set-url origin git@github.com:krisleon99/calculator_utm.git
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-14.png?raw=true)

En este caso no nos dice nada la consola, pero podemos verificarlo ingresando de nuevo el comando (podemos notar que cambió el origin):
```js
git remote -v
```

![configurar clave SSH](https://github.com/Kapelu/blog-kapelu/blob/main/public/assets/images/posts/configurar-claves-ssh/Configurar%20clave%20SSH-15.png?raw=true)

Y listo, podemos comprobarlo haciendo un push al repositorio y no nos pedirá el usuario ni la contraseña (La primera vez nos pregunta que si estamos seguros de continuar la coneccion con una llave RSA, le damos yes).