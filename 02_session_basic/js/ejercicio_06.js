/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_06:Pedir al usuario 2 numeros
 * - Imprimir en consola cual es el menor de los 2
 * - Imprimir en consola cual es el mayor de los 2
 * 
 *************************************************************/


 let n1 = Number(prompt("Introduce el primer número"));
 let n2 = Number(prompt("Introduce el segundo número"));

 if(n1 > n2){
     console.log(`${n1} es el mayor`);
     console.log(`${n2} es el menor`);
 }
 else if(n2 > n1){
    console.log(`${n2} es el mayor`);
    console.log(`${n1} es el menor`);   
 }
 else{
    console.log(`${n2} y ${n2} son iguales`);
 }