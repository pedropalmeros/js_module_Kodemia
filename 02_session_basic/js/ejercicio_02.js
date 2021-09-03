/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_02: Pedir al usuario dos números y escribir en 
 * consola si el primer número es mayor que el segundo.
 *************************************************************/

 let n1 = Number(prompt("Introduce el primer número"));
 let n2 = Number(prompt("Introduce el segundo número"));

 if(n1>n2){
     console.log("El primer número es mayor")
 }
 else if(n1 < n2){
     console.log("El segundo número es menor");
 }
 else{
     console.log("Los números son iguales")
 }