/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 *   Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
 *************************************************************/


 let l1 = prompt("Introduce tu nombre completo: ");

console.log(`Tu nombre tiene ${l1.match(/[aeiou]/gi).length} vocales`)


 

 