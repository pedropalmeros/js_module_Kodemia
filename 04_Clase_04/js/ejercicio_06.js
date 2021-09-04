/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
 *************************************************************/


 let n1 = prompt("Introduce un string de dos palabras");

let s_1_2 = n1.split(" ");

console.log(s_1_2)
 
if(s_1_2[0].length > s_1_2[1]){
   console.log(`La palabra ${s_1_2[0]} es más larga`)
}
else if(s_1_2[0].length < s_1_2[1]){
   console.log(`La palabra ${s_1_2[0]} es más larga`)
}
else{
   console.log("Las strings tienen la misma longitud")
}
