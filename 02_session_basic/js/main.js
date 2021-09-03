let numero_1 = parseFloat(prompt("Introduce el primer número"));
let numero_2 = parseFloat(prompt("Introduce el segundo número"));
let suma=numero_1 + numero_2;
let resta=numero_1 - numero_2;
let producto = numero_1 * numero_2;
let division = numero_1 / numero_2;
let modulo = numero_1 % numero_2;

//Number() -  equal to parseFloat - parseInt
//typeof() - type of data

console.log("Suma -> " + numero_1.toString() + " + " + numero_2.toString() + " = " + (numero_1 + numero_2).toString());
console.log("Resta -> " + numero_1.toString() + " + " + numero_2.toString() + " = " + (numero_1 - numero_2).toString());
console.log("Producto -> " + numero_1.toString() + " + " + numero_2.toString() + " = " + (numero_1 * numero_2).toString());
console.log("Division -> " + numero_1.toString() + " + " + numero_2.toString() + " = " + (numero_1 / numero_2).toString());
console.log("Módulo -> " + numero_1.toString() + " + " + numero_2.toString() + " = " + (numero_1 % numero_2).toString());


console.log("------------------- EJERCICIO 2 ---------------------")
if(numero_1 > numero_2){
    console.log("El primer numero es mayor que el segundo");
}


console.log("------------------ EJERCICIO 3 -------------------------")
let l1 = prompt("Introduce la primer letra");
let l2 = prompt("Introduce la segunda letra");

l1 = l1.charCodeAt(0);
l2 = l2.charCodeAt(0);

if (l1 < l2){
    console.log("La primer letra aparece primero en el abecedario")
}

