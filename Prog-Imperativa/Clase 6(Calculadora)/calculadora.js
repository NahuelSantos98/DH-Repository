/*
//Nivel 1
let sumar = function (num1, num2) {
    return suma = num1 + num2; 
};

console.log(sumar(1, 2));


let restar = function (num1, num2){
    return resta = num1 - num2;
}

console.log(restar(10, 5));

let multiplicar = function (num1, num2){
    return multiplicacion = num1 * num2;
}

console.log(multiplicar(2, 5))

let dividir = function (num1, num2){
    return division = num1 / num2;
}

console.log(dividir(10, 5));


//Nivel 2

console.log("---------SEPARADOR DE CODIGO Nivel 2----------")

const prompt = require("prompt-sync")({ sigint: true });

let prompt1 = parseInt(prompt("Ingresar el Numero 1: "));
let prompt2 = parseInt(prompt("Ingresar el Numero2: "))

let sumar2 = function (prompt1, prompt2) {
    return suma = prompt1 + prompt2; 
};

let restar2 = function (prompt1, prompt2){
    return resta = prompt1 - prompt2;
}

let multiplicar2 = function (prompt1, prompt2){
    return multiplicacion = prompt1 * prompt2;
}

let dividir2 = function (valor1, valor2){
    return division = valor1 / valor2;
}


console.log(sumar2(prompt1, prompt2))
console.log(restar2(prompt1, prompt2))
console.log(multiplicar2(prompt1, prompt2))
console.log(dividir(1, 0))


*/
const prompt = require("prompt-sync")({ sigint: true });

console.log("---------SEPARADOR DE CODIGO Nivel 3----------")

let promptSolo = parseInt(prompt('Ingrese un Numero Solitario: '));

function cuadradoDeUnNumero (promptSolo){
    let cuadrado_numero = promptSolo * promptSolo
    return "El cuadrado de " + promptSolo + " es: " + cuadrado_numero
}
console.log(cuadradoDeUnNumero(promptSolo))

