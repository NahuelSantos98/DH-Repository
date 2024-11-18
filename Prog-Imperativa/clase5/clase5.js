//MicroDesafio
/*
1. Devuelve el resultado de 40 - 10
2. Primero devuelve el resultado de 10*2 despues del return no se ejecuta NADA MAS. Puede tener un solo return
*/
const prompt = require("prompt-sync")({ sigint: true });

//let valor = parseInt(prompt("Ingrese un valor: "))
//let valores = prompt("Ingrese su peticion: ")


//1
/*
function pulgadas_centimetros (valor) {
let centimetro = valor * 2.54
return centimetro
}

console.log(pulgadas_centimetros(valor))

*/

//2
/*
function url (valores) {
    return "https//www." + valores + ".com.ar"
}
console.log(url(valores))
*/


//3
/*
function exclamacion (valores){
    return valores + "!!!"
}

console.log(exclamacion(valores))
*/


//4
/*
function edadPerro (valor){
return "La edad del perro es: " + valor * 7
}

console.log(edadPerro(valor))
*/

//6
let peso = parseInt(prompt('Su peso es de: '))
let altura = parseFloat(prompt('Su altura es de: '))
function imc (peso, altura){
let cuadradoAltura = altura * altura
return "Su IMC es de: " + peso / cuadradoAltura
}

console.log(imc(peso, altura))


/*
//7
function mayusculas (valores) {
return valores.toUpperCase()
}

console.log(mayusculas(valores))
*/