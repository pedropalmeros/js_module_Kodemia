/*************************************************************
 * FULLSTACK BOOTCAMP AT CKODEMIA
 * JAVASCRIPT MODULE
 * AUTOR: Pedro Fernando Flores Palmeros
 * DATE: 03/09/2021
 * -----------------------------------------------
 * Ejercicio_08: Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
 *   -Imprimir en consola las equivalencias en letra su calificación, es decir:
 * 🎯 si es mayor o igual a 90, imprimir "A"
 * 🎯 si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * 🎯 si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * 🎯 si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * 🎯 si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * 🎯 si es menor 50 , imprimir "F"
 *************************************************************/

 let cal = Number(prompt("Introduce tu calificación (0 - 100) "));
 
 if(cal >= 90){
     console.log(`El de tu calificación es A`)
 }

 if(cal>=80 && cal<90){
    console.log(`El de tu calificación es B`)
}

if(cal>=70 && cal<80){
    console.log(`El de tu calificación es C`)
}

if(cal>=60 && cal<70){
    console.log(`El de tu calificación es D`)
}

if(cal>=50 && cal<60){
    console.log(`El de tu calificación es E`)
}

if( cal < 50){
    console.log(`El de tu calificación es F`)
}