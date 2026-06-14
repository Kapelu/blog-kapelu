# ¿Qué es JavaScript?

JavaScript es un lenguaje de programación ampliamente utilizado que permite agregar interactividad, dinamismo y características avanzadas a sitios web y aplicaciones web. Fue desarrollado por Brendan Eich en 1995 y se ha convertido en uno de los lenguajes de programación más populares y esenciales en el mundo del desarrollo web.

# Historia de JavaScript

JavaScript fue creado por Brendan Eich en 1995, mientras trabajaba en Netscape Communications Corporation. Originalmente se llamó Mocha, luego se renombró a LiveScript y finalmente a JavaScript. A pesar del nombre, no tiene relación directa con el lenguaje de programación Java.

Netscape y Sun Microsystems decidieron unir fuerzas y promocionar JavaScript como un lenguaje de scripting complementario a Java. En 1996, Microsoft lanzó su propio dialecto de JavaScript llamado JScript, que se incluyó en Internet Explorer 3.0.

En 1997, se presentó la propuesta de estandarizar JavaScript al organismo de estandarización ECMA International. La primera edición del estándar, conocida como ECMAScript, se publicó en 1998. Desde entonces, ECMAScript ha pasado por varias revisiones y actualizaciones, siendo la versión más reciente ECMAScript 2022 (ES2022).

JavaScript ha crecido significativamente desde sus inicios y ahora se utiliza en una amplia variedad de aplicaciones, desde navegadores web hasta servidores, dispositivos móviles y más. La evolución de JavaScript ha sido impulsada en gran medida por la comunidad de desarrolladores y las mejoras en los motores de JavaScript de los navegadores web.


## Características principales

- **Interpretado**: JavaScript es un lenguaje interpretado, lo que significa que no es necesario compilar el código antes de ejecutarlo. Los navegadores web pueden leer y ejecutar el código JavaScript directamente.

- **Orientado a objetos**: JavaScript es un lenguaje orientado a objetos, lo que facilita la organización y estructuración del código mediante el uso de objetos y clases.

- **Multiplataforma**: JavaScript es compatible con todos los principales navegadores web y sistemas operativos, lo que lo convierte en una excelente opción para el desarrollo de aplicaciones web y móviles.

- **Event-driven**: JavaScript permite la creación de aplicaciones interactivas utilizando eventos, como clics de ratón y pulsaciones de teclas, para controlar el flujo de la ejecución del código.

- **Dinámico**: JavaScript permite a los desarrolladores modificar el contenido y la estructura de una página web en tiempo real, sin necesidad de recargar la página completa.

## Usos comunes de JavaScript

- Crear y controlar animaciones y efectos visuales en sitios web.
- Validación de formularios y entrada de datos en tiempo real.
- Crear aplicaciones web interactivas y de alto rendimiento, como juegos y aplicaciones de colaboración.
- Desarrollo de aplicaciones móviles y de escritorio utilizando tecnologías basadas en JavaScript, como React Native y Electron.
- Desarrollo del lado del servidor con tecnologías como Node.js.


En resumen, JavaScript es un lenguaje de programación versátil y poderoso que es fundamental en el desarrollo web moderno. Aprender JavaScript te permitirá crear sitios web y aplicaciones interactivas y de alto rendimiento. En las siguientes secciones, exploraremos los fundamentos de JavaScript y cómo utilizarlo para mejorar tus proyectos.

---
# Variables en JavaScript

Las variables son elementos esenciales en cualquier lenguaje de programación. En JavaScript, las variables se utilizan para almacenar valores y hacer referencia a ellos en nuestro código.

## Declaración de variables

En JavaScript, podemos declarar variables usando las palabras clave `var`, `let`, o `const`. La diferencia entre estas tres es cómo manejan el alcance y la asignación de valores.

### `var`

La palabra clave `var` se utiliza para declarar variables globales o locales en una función sin importar el bloque en el que se declare.

```js
const miVariable = "Hola mundo";
```

En el ejemplo anterior, la variable `miVariable` es declarada en el ámbito global. Esto significa que la variable `miVariable` puede ser accedida desde cualquier parte del código. También es posible declarar variables e inicializarlas o asignarle valores más adelante. Actualmente el uso de `var` es una practiva en deshuso.

```js
// Declaración de variables
const nombre;

// Asignación de valores
nombre = "Juan";

// Declaración de variables
const edad, programas, numeroIdentificacion;

// Asignación de valores
edad = 30;
programas = true;
numeroIdentificacion = 123456789;
```

### `let`

La palabra clave `let` se utiliza para declarar variables locales en un bloque, declaración o expresión, y solo está disponible dentro del bloque en el que se declara.

```js
let miVariable = "Hola mundo";
```

### `const`

La palabra clave `const` se utiliza para declarar variables de solo lectura que no pueden ser reasignadas. El valor de una variable `const` no puede cambiar a lo largo de la ejecución del programa.

```js
const miVariable = "Hola mundo";
```

### Ejemplo

Cuando usar `const`, `let` o `const`?

Depende de la situación. Si deseas declarar una variable global, usa `const`. Si deseas declarar una variable local, usa `let`. Si deseas declarar una variable de solo lectura, usa `const`.

```javascript
// Declaración de variables
const nombre = "Juan";
let paisDeResidencia = "España";
const edad = 30;
const programas = true;
const numeroIdentificacion = 123456789;
let bandasFavoritas = ["The Beatles", "Led Zeppelin", "Queen"];

// Creación de objeto
const persona = {
  nombre: nombre,
  paisDeResidencia: paisDeResidencia,
  edad: edad,
  programas: programas,
  numeroIdentificacion: numeroIdentificacion,
  bandasFavoritas: bandasFavoritas,
};

console.log(persona);
```

## Buenas prácticas

1. Utiliza nombres descriptivos para tus variables. Por ejemplo, `nombre` es mejor que `n`.
2. Utiliza nombres que sean cortos y concisos.
3. Utiliza nombres que sean fáciles de escribir, leer, pronunciar, recordar y fáciles de buscar en el código.
4. Utiliza nombres en inglés en lo posible.
5. Las variables no deben contener espacios y no pueden contener caracteres especiales.
6. Las variables no deben contener palabras reservadas de JavaScript.
7. Las variables no deben contener nombres de funciones, métodos, clases, objetos, etc.
8. Las variables no deben iniciar con números, pero pueden contenerlos.
9. Los nombres de las variables deben ser en minúsculas, a menos que sean constantes.
10. Los tipos de escritura de las variables deben ser camelCase o snake_case.

---
# Tipos de datos en JavaScript

En JavaScript, existen varios tipos de datos que se pueden utilizar para almacenar información en variables.

* `string`
* `number`
* `boolean`
* `undefined`
* `null`
* `symbol`
* `bigint`
* `array`
* `object`

## Tipo de dato `string`

El tipo de datos `string` o cadena de caracteres se utiliza para representar texto.

```js
const nombre = "Juan";
const apellido = "Pérez";
const nombreCompleto = nombre + " " + apellido;
```

También se pueden utilizar caracteres especiales en las cadenas de texto, como saltos de línea y tabulaciones, utilizando secuencias de escape.

```js
const mensaje = "Este es un mensaje\nen dos líneas.";
const titulo = "Página principal\t\tMi sitio web";
```

## Tipo de dato `number`

El tipo de datos `number` o numérico se utiliza para representar números enteros y decimales.

```js
const numeroEntero = 42;
const numeroDecimal = 3.14;
```

## Tipo de dato `boolean`

El tipo de datos `boolean` o booleano se utiliza para representar valores lógicos, es decir, verdadero o falso.

```js
const esMayorDeEdad = true;
const tieneLicencia = false;
```

## Tipo de dato `undefined`

El tipo de datos `undefined` se utiliza para representar un valor no definido.

```js
const valorNoDefinido;
```

## Tipo de dato `null`

El tipo de datos `null` se utiliza para representar un valor nulo o vacío.

```js
const valorNulo = null;
```

## Tipo de dato `symbol`

El tipo de datos `symbol` se utiliza para representar un valor único e inmutable.

```js
const simbolo = Symbol("mi-simbolo");
```

## Tipo de dato `bigint`

El tipo de datos `bigint` se utiliza para representar números enteros de gran tamaño.

```js
const numeroEnteroGrande = 9007199254740991n;
```

## Tipo de dato `Array`

El tipo de datos `Array` o arreglo se utiliza para representar una colección de datos ordenados.

```js
const frutas = ["manzana", "naranja", "plátano"];
const numeros = [1, 2, 3, 4, 5];
```

## Tipo de dato `object`

El tipo de datos `object` o objeto se utiliza para representar una colección de datos.

```js
const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
```

## Buenas prácticas

Para saber cual es el tipo de dato de una variable, podemos utilizar el operador `typeof`.

```javascript
const nombre = "Juan";
console.log(typeof nombre); // string

const edad = 30;
console.log(typeof edad); // number

const programas = true;
console.log(typeof programas); // boolean

const valorNoDefinido;
console.log(typeof valorNoDefinido); // undefined

const valorNulo = null;
console.log(typeof valorNulo); // object

const simbolo = Symbol("mi-simbolo");
console.log(typeof simbolo); // symbol

const numeroEnteroGrande = 9007199254740991n;
console.log(typeof numeroEnteroGrande); // bigint

const frutas = ["manzana", "naranja", "plátano"];
console.log(typeof frutas); // object

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
console.log(typeof persona); // object
```
---
# Coerción de datos en JavaScript

La coerción de datos en JavaScript se refiere a la conversión automática que realiza el lenguaje de un tipo de dato a otro. A continuación, se presentan algunos ejemplos de coerción de datos en JavaScript.

## Coerción implícita

La coerción implícita es cuando JavaScript convierte un tipo de dato automáticamente en otro. Por ejemplo, cuando se suman un número y una cadena de texto, JavaScript convierte automáticamente la cadena de texto en un número antes de realizar la suma.

```javascript
const edad = 30;
const mensaje = "Tengo " + edad + " años."; // Coerción implícita de edad a cadena de texto
console.log(mensaje); // salida: "Tengo 30 años."
```

## Coerción explícita

La coerción explícita es cuando se realiza una conversión de un tipo de dato a otro de forma explícita utilizando funciones o métodos específicos. Por ejemplo, se puede convertir una cadena de texto a un número utilizando la función `Number()`.

```javascript
const numeroComoCadena = "42";
const numeroComoNumero = Number(numeroComoCadena); // Coerción explícita de cadena de texto a número
console.log(typeof numeroComoCadena); // salida: "string"
console.log(typeof numeroComoNumero); // salida: "number"
```

## Coerción de datos: `string`

En JavaScript, cualquier tipo de dato puede ser convertido a una cadena de texto utilizando el método `toString()`. Este método devuelve una cadena de texto que representa el valor original.

```javascript
const numero = 42;
const cadenaDeTexto = numero.toString(); // Conversión a cadena de texto
console.log(typeof numero); // salida: "number"
console.log(typeof cadenaDeTexto); // salida: "string"
```

## Coerción de datos: `number`

En JavaScript, cualquier tipo de dato puede ser convertido a un número utilizando las funciones `Number()` y `parseInt()`. La función `Number()` devuelve un número de punto flotante, mientras que la función parseInt() devuelve un número entero.

```javascript
const cadenaDeTexto1 = "42";
const cadenaDeTexto2 = "3.14";
const numero1 = Number(cadenaDeTexto1); // Conversión a número de punto flotante
const numero2 = parseInt(cadenaDeTexto2); // Conversión a número entero
console.log(typeof cadenaDeTexto1); // salida: "string"
console.log(typeof cadenaDeTexto2); // salida: "string"
console.log(typeof numero1); // salida: "number"
console.log(typeof numero2); // salida: "number"
```

## Coerción de datos: `boolean`

En JavaScript, cualquier tipo de dato puede ser convertido a un valor booleano. Los valores que se consideran `false` en JavaScript son `false`, `0`, `""`, `null`, `undefined` y `NaN`. Cualquier otro valor se considera `true`.

```javascript
const valor1 = 1;
const valor2 = "";
const valor3 = undefined;
const valor4 = null;
console.log(Boolean(valor1)); // salida: true
console.log(Boolean(valor2)); // salida: false
console.log(Boolean(valor3)); // salida: false
console.log(Boolean(valor4)); // salida: false
```

¡Y eso es todo por ahora! La coerción de datos en JavaScript es una herramienta muy útil para convertir valores de un tipo de dato a otro cuando sea necesario, ya sea de forma implícita o explícita. Es importante tener en cuenta que la coerción implícita puede llevar a resultados inesperados o errores en nuestro código si no se maneja adecuadamente. Por eso es recomendable ser conscientes de las conversiones de datos que están ocurriendo en nuestro código y utilizar la coerción explícita cuando sea necesario para evitar confusiones o errores. Con un buen conocimiento de la coerción de datos en JavaScript, podemos escribir código más claro y efectivo para nuestras aplicaciones.

## Buenas prácticas

- Evitar el uso de operadores de igualdad débil (==) y desigualdad débil (!=) ya que pueden provocar resultados inesperados debido a la coerción automática de tipos de datos. En su lugar, se recomienda utilizar los operadores de igualdad estricta (===) y desigualdad estricta (!==) que comparan tanto el valor como el tipo de dato.
- Utilizar los métodos nativos de conversión de tipos de datos, como parseInt(), parseFloat() y Number(), en lugar de usar conversiones implícitas. Esto ayuda a evitar errores y asegura una conversión precisa.
- Ser explícitos al convertir valores, en lugar de confiar en la coerción implícita. Por ejemplo, usar parseInt("10", 10) en lugar de solo parseInt("10").
- Entender cómo funciona la coerción de tipos de datos en JavaScript. Por ejemplo, tener en cuenta que una cadena vacía ("") se convierte en 0 cuando se usa en una operación aritmética.
- Usar isNaN() para verificar si un valor es NaN (Not a Number) en lugar de compararlo directamente con NaN.
- Usar typeof para verificar el tipo de dato de un valor en lugar de compararlo directamente con un tipo de dato.

---
# Operadores en JavaScript

Los operadores en JavaScript son símbolos que nos permiten realizar operaciones con uno o más valores. A continuación, se presentan algunos ejemplos de operadores en JavaScript.

## Operadores aritméticos

Los operadores aritméticos en JavaScript nos permiten realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

```javascript
const x = 10;
const y = 5;

const suma = x + y; // Suma
const resta = x - y; // Resta
const multiplicacion = x * y; // Multiplicación
const division = x / y; // División

console.log(suma); // salida: 15
console.log(resta); // salida: 5
console.log(multiplicacion); // salida: 50
console.log(division); // salida: 2
```

## Operadores de asignación

Los operadores de asignación en JavaScript nos permiten asignar un valor a una variable.

```javascript
const x = 10;

x += 5; // Equivalente a x = x + 5
console.log(x); // salida: 15

x -= 3; // Equivalente a x = x - 3
console.log(x); // salida: 12

x *= 2; // Equivalente a x = x * 2
console.log(x); // salida: 24

x /= 4; // Equivalente a x = x / 4
console.log(x); // salida: 6
```

## Operadores de comparación

Los operadores de comparación en JavaScript nos permiten comparar dos valores y devolver un valor booleano (`true` o `false`) que indica si la comparación es verdadera o falsa.

| Operador | Descripción                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| `==`     | Compara si dos valores son iguales, realizando una conversión de tipos si es necesario.    |
| `===`    | Compara si dos valores son iguales en tipo y valor, sin realizar una conversión de tipos.  |
| `!=`     | Compara si dos valores son diferentes, realizando una conversión de tipos si es necesario. |
| `>`      | Compara si el primer valor es mayor que el segundo valor.                                  |
| `<`      | Compara si el primer valor es menor que el segundo valor.                                  |
| `>=`     | Compara si el primer valor es mayor o igual que el segundo valor.                          |
| `<=`     | Compara si el primer valor es menor o igual que el segundo valor.                          |

```javascript
const x = 10;
const y = 5;

console.log(x > y); // salida: true
console.log(x < y); // salida: false
console.log(x >= y); // salida: true
console.log(x <= y); // salida: false
console.log(x == y); // salida: false
console.log(x != y); // salida: true
console.log(5 === "5"); // salida: false
```

## Operador de igualdad estricta

En JavaScript, el operador de igualdad estricta (`===`) se utiliza para comparar si dos valores son iguales en tipo y valor. A diferencia del operador de igualdad (`==`), el operador de igualdad estricta no realiza una conversión de tipos antes de la comparación.

```javascript
console.log(5 === 5); // salida: true
console.log(5 === "5"); // salida: false
console.log(true === 1); // salida: false
console.log(null === undefined); // salida: false
console.log("hello" === "hello"); // salida: true
console.log({} === {}); // salida: false
```

En el primer ejemplo, se comparan dos números iguales y de igual tipo, por lo que el resultado es `true`. En el segundo ejemplo, se comparan un número y una cadena de texto, que son de tipos diferentes, por lo que el resultado es `false`. En el tercer ejemplo, se comparan un booleano y un número, que son de tipos diferentes, por lo que el resultado es `false`. En el cuarto ejemplo, se comparan dos valores nulos, que son de igual tipo y valor, por lo que el resultado es `true`. En el quinto ejemplo, se comparan dos cadenas de texto iguales y de igual tipo, por lo que el resultado es `true`. En el último ejemplo, se comparan dos objetos distintos, por lo que el resultado es `false`.

Es importante tener en cuenta que el operador de igualdad estricta evalúa también el tipo de dato de los valores a comparar. Esto puede ser útil en ciertos casos para evitar errores de comparación por conversiones de tipos inesperadas.

## Operadores lógicos

Los operadores lógicos en JavaScript nos permiten combinar expresiones booleanas y devolver un valor booleano (`true` o `false`) que indica si la combinación es verdadera o falsa.

```javascript
const x = 10;
const y = 5;

console.log(x > 5 && y < 10); // salida: true
console.log(x > 5 || y > 10); // salida: true
console.log(!(x > y)); // salida: false
```

## Operador ternario

El operador ternario en JavaScript nos permite realizar una evaluación condicional y asignar un valor a una variable según el resultado de la evaluación.

```javascript
const edad = 20;
const esMayorDeEdad = edad >= 18 ? "Sí" : "No";

console.log(esMayorDeEdad); // salida: "Sí"
```

En este ejemplo, la variable `esMayorDeEdad` se asigna con el valor "Sí" si la `edad` es mayor o igual a 18, y con el valor "No" en caso contrario.

## Buenas prácticas

- Evita utilizar el operador de igualdad estricta (`===`) para comparar valores nulos o indefinidos. En estos casos, es mejor utilizar el operador de igualdad (`==`).
- Evitar el uso de operadores de igualdad débil (`==`) y desigualdad débil (`!=`) ya que pueden provocar resultados inesperados debido a la coerción automática de tipos de datos. En su lugar, se recomienda utilizar los operadores de igualdad estricta (`===`) y desigualdad estricta (`!==`) que comparan tanto el valor como el tipo de dato.
- Utilizar operadores bit a bit solo cuando sea necesario, ya que pueden hacer que el código sea difícil de entender. En su lugar, usar los operadores lógicos (`&&`, `||`) y los operadores de comparación (`===`, `!==`) cuando sea posible.
- Evitar el uso de operadores de incremento (`++`) y decremento (`--`), ya que pueden hacer que el código sea difícil de entender y llevar a errores sutiles. En su lugar, utilizar operaciones aritméticas simples.
- Ser conscientes de la precedencia y la asociatividad de los operadores. Si no estamos seguros de cómo se evaluará una expresión, utilizar paréntesis para asegurarnos de que se evalúe de la manera que queremos.
- Utilizar operadores lógicos cortocircuitados (`&&` y `||`) en lugar de los operadores ternarios cuando sea posible. Por ejemplo, en lugar de escribir:

```javascript
const resultado = (condicion) ? valor1 : valor2;
```

Podemos escribir:

```javascript
const resultado = condicion && valor1 || valor2;
```

Esto hace que el código sea más conciso y legible.

---
# Ejercicios fundamentos de programación

Esta sección contiene ejercicios para practicar los conceptos fundamentales de programación en JavaScript.

## Variables, tipos de datos y operadores

Los ejercicios de esta sección se basan en la declaración de variables, tipos de datos y operadores.

### Ejercicio 1

Crea una variable llamada carName y asígnale el valor “Volvo”.

```javascript
const carName = "Volvo";
```

### Ejercicio 2

Crea una variable llamada x y asígnale el valor 50.

```javascript
const x = 50;
```

### Ejercicio 3

Crea la suma de 5 + 10, utilizando dos variables: a y b

```javascript
const a = 5;
const b = 10;

const suma = a + b;
```

### Ejercicio 4

Crea una variable llamada z, asígnale x + y y muestra el resultado en un cuadro de alerta.

```javascript
const y = 20;
const z = x + y;

alert(z);
```

---
# Condicionales en JavaScript

Los condicionales en JavaScript nos permiten controlar el flujo de ejecución de nuestro código según ciertas condiciones. Los condicionales más comunes en JavaScript son `if`, `else if` y `else`.

## `if`

La sentencia `if` se utiliza para ejecutar un bloque de código si se cumple una condición determinada.

```javascript
var edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

## `else`

La sentencia `else` se utiliza para ejecutar un bloque de código si no se cumple la condición del `if`.

```javascript
var dia = "domingo";

if (dia === "sábado" || dia === "domingo") {
  console.log("¡Es fin de semana!");
} else {
  console.log("¡A trabajar!");
}
```

En este ejemplo, la sentencia `if` evalúa si la variable `dia` es igual a "sábado" o "domingo". Si se cumple la condición, se muestra el mensaje "¡Es fin de semana!". Si no se cumple la condición del `if`, se ejecuta el bloque de código dentro del `else` y se muestra el mensaje "¡A trabajar!".

## `else if`

La sentencia `else if` se utiliza para evaluar múltiples condiciones. Si la primera condición no se cumple, se evalúa la siguiente condición. Si ninguna de las condiciones se cumple, se ejecuta el bloque de código dentro del `else`.

```javascript
var hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

En este ejemplo, la sentencia `if` evalúa si la variable `hora` es menor que 12. Si se cumple la condición, se muestra el mensaje "Buenos días". Si no se cumple la condición del `if`, la sentencia `else if` evalúa si la variable `hora` es menor que 20. Si se cumple esta condición, se muestra el mensaje "Buenas tardes". Si no se cumple ninguna de las dos condiciones anteriores, se ejecuta el bloque de código dentro del else y se muestra el mensaje "Buenas noches".

## Operador ternario

El operador ternario es una forma abreviada de escribir una sentencia `if` en una sola línea.

```javascript
var edad = 20;
var esMayorDeEdad = edad >= 18 ? "Sí" : "No";

console.log(esMayorDeEdad); // salida: "Sí"
```

En este ejemplo, se evalúa si la variable `edad` es mayor o igual a 18. Si se cumple la condición, la variable `esMayorDeEdad` se asigna con el valor "Sí". Si no se cumple la condición, se asigna con el valor "No". El resultado se muestra en la consola con la función `console.log()`.

## switch

La sentencia `switch` en JavaScript nos permite ejecutar diferentes bloques de código según el valor de una variable o expresión. La estructura básica de una sentencia `switch` es la siguiente:

```javascript
switch (expresión) {
  case valor1:
    // bloque de código para el valor1
    break;
  case valor2:
    // bloque de código para el valor2
    break;
  ...
  default:
    // bloque de código por defecto
}
```

En este ejemplo, la sentencia `switch` evalúa la expresión y ejecuta el bloque de código correspondiente al caso que coincida con el valor de la expresión. Si no se cumple ningún caso, se ejecuta el bloque de código por defecto.

```javascript
var dia = 5;
var mensaje;

switch (dia) {
  case 1:
    mensaje = "Lunes";
    break;
  case 2:
    mensaje = "Martes";
    break;
  case 3:
    mensaje = "Miércoles";
    break;
  case 4:
    mensaje = "Jueves";
    break;
  case 5:
    mensaje = "Viernes";
    break;
  case 6:
    mensaje = "Sábado";
    break;
  case 7:
    mensaje = "Domingo";
    break;
  default:
    mensaje = "Día inválido";
}

console.log(mensaje); // salida: "Viernes"
```

En este ejemplo, se evalúa la variable `dia` y se ejecuta el bloque de código correspondiente al caso que coincide con el valor de `dia`. Como `dia` tiene un valor de 5, se ejecuta el bloque de código correspondiente al caso `case 5`, que asigna el mensaje "Viernes" a la variable `mensaje`. El resultado se muestra en la consola con la función `console.log()`.

## Buenas prácticas

- Evita anidar condicionales. Si tienes que anidar más de dos condicionales, es mejor utilizar una estructura de control diferente.
- Evita utilizar la sentencia `switch` cuando se pueda utilizar una sentencia `if` o `else if`.
- Siempre utiliza llaves para los bloques de código, incluso si solo hay una sentencia.
- Ser explícito con la comparación de valores y tipos de datos. En lugar de utilizar el operador de igualdad débil (`==`) que puede provocar la conversión implícita de tipos de datos, se recomienda utilizar el operador de igualdad estricta (`===`) que compara tanto el valor como el tipo de dato.
- Evitar las condiciones anidadas o en cascada. Si es posible, se recomienda utilizar operadores lógicos (`&&`, `||`) para simplificar y mejorar la legibilidad del código.
- Evitar la negación doble (`!!`) para convertir un valor en un valor booleano. En su lugar, utilizar los operadores `Boolean()` o `!!` para convertir un valor en un valor booleano.
- Ser cuidadoso al utilizar la negación (`!`). Asegurarse de que el resultado de la negación sea lo que se espera. En algunos casos, puede ser más claro y legible utilizar una comparación explícita en lugar de la negación.
- Utilizar variables descriptivas y legibles para los valores de las condiciones y los resultados de las operaciones. Esto hace que el código sea más fácil de entender y depurar.
- Asegurarse de que todas las posibles condiciones sean evaluadas. Incluir una condición else para manejar los casos en los que ninguna de las condiciones anteriores es verdadera.
- Asegurarse de que las condiciones sean lo más específicas posible. Si hay varias condiciones que pueden ser verdaderas, se recomienda evaluar la condición más específica primero.

Siguiendo estas buenas prácticas en las condicionales en JavaScript, podemos escribir código más legible, fácil de entender y menos propenso a errores sutiles.


---
# Bucles en JavaScript

Los bucles en JavaScript nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición determinada. Los bucles más comunes en JavaScript son `for`, `for-in`, `while` y `do-while`.

## `for`

La sentencia `for` se utiliza para repetir un bloque de código un número determinado de veces.

```javascript
for (var i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
```

En este ejemplo, la variable `i` se utiliza para llevar un registro del número de veces que se ha ejecutado el bloque de código dentro del `for`. La sentencia `for` inicializa `i` con un valor de 0. Mientras que `i` sea menor que 5, se ejecutará el bloque de código, mostrando en la consola el valor actual de `i` con el mensaje "El valor de i es: " y aumentando el valor de `i` en cada iteración.

## `for-in`

La sentencia `for-in` se utiliza para recorrer las propiedades de un objeto.

```javascript
var persona = {
  nombre: "Ana",
  edad: 28,
  pais: "España"
};

for (var propiedad in persona) {
  console.log("La propiedad " + propiedad + " tiene el valor " + persona[propiedad]);
}
```

En este ejemplo, la variable `propiedad` se utiliza para llevar un registro del nombre de la propiedad que se está recorriendo en cada iteración. La sentencia `for-in` recorre las propiedades del objeto `persona` y, en cada iteración, muestra en la consola el nombre de la propiedad junto con su valor correspondiente, utilizando la sintaxis `persona[propiedad]`.

## `while`

La sentencia `while` se utiliza para repetir un bloque de código mientras se cumpla una condición determinada.

```javascript
var contador = 0;

while (contador < 5) {
  console.log("El contador es: " + contador);
  contador++;
}
```

En este ejemplo, la variable `contador` se utiliza para llevar un registro del número de veces que se ha ejecutado el bloque de código dentro del `while`. Mientras que el valor de `contador` sea menor que 5, el bloque de código se seguirá ejecutando, mostrando en la consola el valor actual de `contador` con el mensaje "El contador es: " y aumentando el valor de `contador` en cada iteración.

## `do-while`

La sentencia `do-while` se utiliza para repetir un bloque de código al menos una vez y luego mientras se cumpla una condición determinada.

```javascript
var numero = 0;

do {
  console.log("El número es: " + numero);
  numero++;
} while (numero < 5);
```

En este ejemplo, la variable `numero` se utiliza para llevar un registro del número de veces que se ha ejecutado el bloque de código dentro del `do`. El bloque de código se ejecutará al menos una vez, mostrando en la consola el valor actual de `numero` con el mensaje "El número es: " y aumentando el valor de `numero` en cada iteración. La sentencia `while` evalúa si el valor de `numero` es menor que 5 y, mientras que esto sea cierto, se seguirá repitiendo el bloque de código dentro del `do`.

## Buenas prácticas

- Utilizar el bucle más apropiado para la tarea. Los bucles `for` son útiles para iterar sobre un rango de números, mientras que los bucles `while` son útiles para iterar mientras se cumpla una condición.
- Ser consciente del número de iteraciones que se realizarán. En algunos casos, puede ser más eficiente utilizar un bucle `for` en lugar de un bucle `while`, ya que se conoce de antemano el número de iteraciones.
- Evitar bucles infinitos. Asegurarse de que la condición de finalización del bucle sea alcanzable. Si no se cumple la condición de finalización, el bucle se ejecutará indefinidamente y puede causar problemas de rendimiento o errores en la aplicación.
- Utilizar nombres descriptivos y legibles para las variables de los bucles. Esto hace que el código sea más fácil de entender y depurar.
- No modificar la variable de control dentro del bucle. Si es necesario modificar la variable de control, asegurarse de que la condición de finalización del bucle siga siendo alcanzable.
- Evitar las operaciones costosas dentro del bucle. Si es posible, realizar las operaciones costosas fuera del bucle o en una iteración separada.

Siguiendo estas buenas prácticas en los bucles en JavaScript, podemos escribir código más legible, eficiente y menos propenso a errores sutiles.

---
# Ejercicios estructuras de control

Esta sección contiene ejercicios para practicar los conceptos de estructuras de control en JavaScript.

## Condicionales

Los ejercicios de esta sección se basan en la declaración de condicionales.

### Ejercicio 1

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
}
```

### Ejercicio 2

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, y otro mensaje de alerta si la edad es menor a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}
```

### Ejercicio 3

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18.

```javascript
var edad = 18;

if (edad >= 18) {
  alert("Eres mayor de edad");
} else if (edad < 18) {
  alert("Eres menor de edad");
} else {
  alert("Tienes 18 años");
}
```


### Ejercicio 4

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

alert(mensaje);
```

### Ejercicio 5

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario y el operador lógico `&&`.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : edad < 18 && edad > 0 ? "Eres menor de edad" : "No has nacido";

alert(mensaje);
```

### Ejercicio 6

Crea una variable llamada `edad` y asígnale el valor `18`. Crea una condicional que muestre un mensaje de alerta si la edad es mayor o igual a 18, otro mensaje de alerta si la edad es menor a 18, y otro mensaje de alerta si la edad es igual a 18. Utiliza el operador ternario y el operador lógico `||`.

```javascript
var edad = 18;

var mensaje = edad >= 18 ? "Eres mayor de edad" : edad < 18 || edad > 0 ? "Eres menor de edad" : "No has nacido";

alert(mensaje);
```

### Ejercicio 7

Escribe un programa que solicite al usuario que ingrese un número y determine si es par o impar. Si el número es par, el programa debe imprimir "El número ingresado es par". De lo contrario, el programa debe imprimir "El número ingresado es impar".

```javascript
const numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 === 0) {
  console.log("El número ingresado es par");
} else {
  console.log("El número ingresado es impar");
}
```

### Ejercicio 8

Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y determine a qué día de la semana corresponde. Si el número es 1, el programa debe imprimir "Lunes", si es 2, debe imprimir "Martes", y así sucesivamente hasta llegar a 7, que corresponde a "Domingo". Si el usuario ingresa un número fuera del rango válido, el programa debe imprimir "Número inválido".

```javascript
const numero = parseInt(prompt("Ingrese un número del 1 al 7"));

switch (numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido");
    break;
}
```

### Ejercicio 9

Escribe un programa que imprima la tabla de multiplicar del número 5, del 1 al 10. El programa debe utilizar un bucle `for` para realizar la multiplicación y luego imprimir el resultado en cada iteración.

```javascript
const numero = 5;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
```

### Ejercicio 10

Escribe un programa que solicite al usuario que adivine un número secreto entre 1 y 10. El programa debe generar un número aleatorio y luego solicitar al usuario que ingrese un número hasta que adivine el número secreto. El programa debe imprimir "¡Adivinaste!" y salir del bucle `while` cuando el usuario adivine el número.

```javascript
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroAdivinado = parseInt(prompt("Adivina el número secreto entre 1 y 10"));

while (numeroAdivinado !== numeroSecreto) {
  numeroAdivinado = parseInt(prompt("Intenta de nuevo. Adivina el número secreto entre 1 y 10"));
}

console.log("¡Adivinaste!");
```

---
