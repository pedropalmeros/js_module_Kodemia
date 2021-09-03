/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_03: Pedir al usuario dos letras, y determinar si 
 * la primera apare antes o después en el alfabeto.
 *************************************************************/


 let l1 = prompt("Introduce la primer letra");
 let l2 = prompt("Introduce la segunda letra");
 
 l1 = l1.charCodeAt(0);
 l2 = l2.charCodeAt(0);
 
 if (l1 < l2){
     console.log("La primer letra aparece primero en el abecedario")
 }


 