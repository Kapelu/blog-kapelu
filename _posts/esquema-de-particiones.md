---
title: 'Particionado de disco duro'
description: Configuración básica de un disco duro para instalar Ubuntu
date: '2021-06-07'
modified_date: '2020-04-15'
image: /assets/images/posts/
---

### ***`/swap` (Área de intercambio)***

Las particiones `/swap` sirven para soportar la memoria virtual. En otras palabras, los datos se escriben en una partición swap cuando no hay suficiente memoria RAM para almacenar la información que su sistema está procesando. Use la siguiente tabla si requiere una cantidad de espacio de swap más precisa.

    ------------------------------------------------------------------------------
    |  Cantidad de RAM en el sistema  |   Cantidad recomendada de espacio swap   |
    |---------------------------------|------------------------------------------|
    |  4 GB o menos                   |   Un mínimo de 2GB de espacio swap       |
    |  De 4GB a 16GB de RAM           |   un mínimo de 4GB de espacio swap       |
    |  De 16GB a 64GB de RAM          |   un mínimo de 8GB de espacio swap       |
    |  De 64GB a 256GB de RAM         |   un mínimo de 16GB de espacio swap      |
    |  De 256GB a 512GB de RAM        |   un mínimo de 32GB de espacio swap      |
    ------------------------------------------------------------------------------

### ***`/boot` (Archivos de arranque)***

La partición montada en ***`/boot`*** contiene el kernel del sistema operativo (el cual permite a su sistema linux arrancar) junto con archivos utilizados durante el proceso de arranque. Para la mayoría de los usuarios, una partición de arranque de 1 GB es suficiente.

### ***`/` (Archivos de sistema)***

Aquí es donde se localiza `"/" (el directorio raíz)`. En esta configuración, todos los archivos (excepto aquellos almacenados en /boot) están en la partición raíz. 70 GB le permite realizar una instalación completa, seleccionando todos los grupos de paquetes.

### ***`/home`***

Es donde normalmente los usuarios guardan las descargas de torrent, las peliculas, la música, miles de fotos, etc. para el tamaño serian los GB deseados por el ususario. 


***En resumen***

_**Particiones**_

    -- /swap = 4Gb `2Gb`
    -- /boot = 1Gb
    -- /     = 75Gb
    -- /home = lo que gustes

_**Recuerda:**_ 
> _La partición sobre la cual vas a realizar todas las particiones `/swap`, `/boot`, `/` y `/home` esa es del tipo ***Primaria*** y todas las otras del tipo ***Lógica***._