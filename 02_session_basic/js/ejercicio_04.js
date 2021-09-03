/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_04: 
 *  Pedir 2 variables por prompt:
 * - Si a > b dividir a entre b
 * - Si a < b sumar a más b
 * - si a == b multiplicar ambos numeros
 * Imprimir el resultado en consola
 *************************************************************/

let a = Number(prompt("Introduce el primer número: "));
let b = Number(prompt("Introduce el segundo número: "));
let resultado = 0;
if (a>b){
    resultado = a/b;
    console.log(`Se realizará la división\n`)
}
else if(a < b){
    resultado = a+b;
    console.log(`Se realizará la suma\n`)
}
else{
    resultado = a*b;
    console.log(`Se realizará la multiplicación\n`)
}

console.log(`El resultado es: ${resultado}`);