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

/******************* EJERCICIO 44 *************************************/

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
