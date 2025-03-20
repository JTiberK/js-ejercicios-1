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

let frut= ["manzana"];

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
  saludar: function() {
    console.log("Hola");
  }
};

// Llama al método saludar
usuario.saludar(); // Salida: Hola

/******************* EJERCICIO 13 *************************************/
