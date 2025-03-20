/******************* EJERCICIO 1 *************************************/

console.log("¡Hola, Mundo!");

/******************* EJERCICIO 2 *************************************/

let num = 10;

const str = "Hola, mundo!";

console.log(num);
console.log(str);

/******************* EJERCICIO 3 *************************************/

console.log(typeof 42); // Salida: "number"

console.log(typeof "JavaScript"); // Salida: "string"

console.log(typeof true); // Salida: "boolean"

/******************* EJERCICIO 4 *************************************/

const resultado = (15 + 3) * (8 / 2);

console.log(resultado); // Salida: 72

/******************* EJERCICIO 5 *************************************/

function sumar(num1, num2) {
  const result = num1 + num2;

  return result;
}

const suma1 = sumar(5, 3);
const suma2 = sumar(10, 20);

console.log(suma1); // Salida: 8
console.log(suma2); // Salida: 30

/******************* EJERCICIO 6 *************************************/

function verifNum(num) {
  if (num > 0) {
    console.log("El número es positivo.");
  } else if (num < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es cero.");
  }
}

// Ejemplos de uso
verifNum(5); // El número es positivo.
verifNum(-3); // El número es negativo.
verifNum(0); // El número es cero.

/******************* EJERCICIO 7 *************************************/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/******************* EJERCICIO 8 *************************************/

const text = "hola mundo";

const textMayus = text.toUpperCase();

const result = textMayus + " desde JS";

console.log(result); // Salida: HOLA MUNDO desde JS

/******************* EJERCICIO 9 *************************************/

const frutas = ["manzana", "banana", "pera"];

const segundaFruta = frutas[1];

console.log(segundaFruta); // Salida: banana

/******************* EJERCICIO 10 *************************************/

let frut = ["manzana"];

// Muestra el estado inicial del array
console.log("Estado inicial:", frut); // Salida: Estado inicial: [ 'manzana' ]

// Usa push para añadir "naranja" al array
frut.push("naranja");

// Muestra el estado del array después de usar push
console.log("Después de push:", frut); // Salida: Después de push: [ 'manzana', 'naranja' ]


console.log("Después de pop:", frut); // Salida: Después de pop: [ 'manzana' ]

/******************* EJERCICIO 11 *************************************/

let usuario = {
  nombre: "Juan Pérez",
  edad: 30,
};

// Muestra el valor de las propiedades en la consola
console.log("Nombre:", usuario.nombre);  // Salida: Nombre: Juan Pérez
console.log("Edad:", usuario.edad);  // Salida: Edad: 30

/******************* EJERCICIO 12 *************************************/

// Se añade un método saludar al objeto usuario
usuario = {
  saludar: function () {
    console.log("Hola");
  }
};

// Llama al método saludar
usuario.saludar(); // Salida: Hola

/******************* EJERCICIO 13 *************************************/

// Crea un nuevo objeto Date
const fechaActual = new Date();

// Obtiene el año actual
const anioActual = fechaActual.getFullYear();

// Muestra el año actual en la consola
console.log("Año actual:", anioActual); // Salida: Año actual: 2021

/******************* EJERCICIO 14 **********************************************/

// Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo) (0 a 0.999...)
const numeroAleatorio = Math.random();

// Multiplica el número aleatorio por 10 para obtener un número entre 0 y 9.999...
const numeroMultiplicado = numeroAleatorio * 10;

// Usa Math.floor() para redondear hacia abajo al entero más cercano (0-9)
const numeroEntero = Math.floor(numeroMultiplicado);

// Suma 1 para obtener un número entre 1 y 10
const numeroFinal = numeroEntero + 1;

// Muestra el resultado en la consola
console.log("Número aleatorio:", numeroFinal);

/******************* EJERCICIO 15 **********************************************/

function obtenerDiaDeLaSemana(numero) {
  let diaDeLaSemana;

  switch (numero) {
    case 0:
      diaDeLaSemana = "Domingo";
      break;
    case 1:
      diaDeLaSemana = "Lunes";
      break;
    case 2:
      diaDeLaSemana = "Martes";
      break;
    case 3:
      diaDeLaSemana = "Miércoles";
      break;
    case 4:
      diaDeLaSemana = "Jueves";
      break;
    case 5:
      diaDeLaSemana = "Viernes";
      break;
    case 6:
      diaDeLaSemana = "Sábado";
      break;
    default:
      diaDeLaSemana = "Número de día inválido";
  }

  return diaDeLaSemana;
}

// Ejemplos de uso
console.log(obtenerDiaDeLaSemana(0)); // Salida: Domingo
console.log(obtenerDiaDeLaSemana(1)); // Salida: Lunes
console.log(obtenerDiaDeLaSemana(6)); // Salida: Sábado
console.log(obtenerDiaDeLaSemana(7)); // Salida: Número de día inválido

/******************* EJERCICIO 16 **********************************************/

let contador = 5;

while (contador >= 1) {
  console.log(contador);
  contador--;
}

/******************* EJERCICIO 17 **********************************************/

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ejemplos de uso
console.log("4 es " + esPar(4));  // Salida: true
console.log("7 es " + esPar(7));  // Salida: false
console.log("0 es " + esPar(0));  // Salida: true
console.log("-2 es " + esPar(-2)); // Salida: true
console.log("-5 es " + esPar(-5)); // Salida: false


/******************* EJERCICIO 18 **********************************************/

// Define las variables nombre y edad
const nom = "Carlos";
const ed = 35;

// Crea el mensaje personalizado usando template strings
const men = `Hola, ${nom} tienes ${ed} años`;

// Muestra el mensaje en la consola
console.log(men); // Salida: Hola, Carlos tienes 35 años


/******************* EJERCICIO 19 **********************************************/

// Arrow Function
const suma = (a, b) => a + b;
console.log(suma(3, 5)); // Salida: 8

/******************* EJERCICIO 20 **********************************************/

// forEach
const numeros = [1, 2, 3];
numeros.forEach(numero => console.log(numero)); // Salida: 1, 2, 3

/******************* EJERCICIO 21 **********************************************/

// indexOf
const fruas = ["manzana", "banana", "pera"];
const posicionBanana = fruas.indexOf("banana");
console.log(posicionBanana); // Salida: 1

/******************* EJERCICIO 22 **********************************************/

// Ordenar números con sort
const numerosDesordenados = [5, 1, 3];
numerosDesordenados.sort((a, b) => a - b);
console.log(numerosDesordenados); // Salida: [1, 3, 5]

/******************* EJERCICIO 23 **********************************************/

// Filtrar con filter
const numerosParaFiltrar = [1, 2, 3, 4];
const numerosPares = numerosParaFiltrar.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Salida: [2, 4]

/******************* EJERCICIO 24 **********************************************/

// Transformar con map
const numerosParaMapear = [1, 17, 23];
const numerosCuadrados = numerosParaMapear.map(numero => numero * numero);
console.log(numerosCuadrados); // Salida: [1, 289, 529]