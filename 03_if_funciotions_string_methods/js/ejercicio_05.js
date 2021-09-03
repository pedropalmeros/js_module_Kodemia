/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_05:    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
 *************************************************************/

let s1 = prompt("Introduce la primer string ");
let s2 = prompt("Introduce la primer string ");

if(s1.length > s2.length){
    console.log("La primera string es mas larga")
}
else if(s1.length < s2.length){
    console.log("La segunda string es más larga")
}
else{
    console.log("Las strings tienen la misma longitud")
}

