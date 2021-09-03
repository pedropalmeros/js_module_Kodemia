/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_05: Pedir al usuario por prompt un numero entre 1 y 100
* - Verificar si es un par o impar e imprimir en resultado en consola
 *************************************************************/

let n1 = Number(prompt("Introduce un número (1 - 100): "));

if(n1%2==0){
    console.log(`El número ${n1} es par`)
}
else{
    console.log(`El número ${n1} es impar`)
}