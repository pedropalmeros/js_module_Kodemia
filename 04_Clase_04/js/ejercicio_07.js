/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_07: Pedir al usuario los siguientes datos a un usuario 
 * (nombre, peso actual en kg):
 * - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
 *************************************************************/

let nombre=prompt("Introduce tu nombre: ");
let masa=Number(prompt("Introduce tu peso (kg): "));

console.log(`En la Luna la aceleración de la gravedad es: 1.62, tu peso sería. ${masa/1.62}`);