/*
let edad = 22

if (edad <= 0) {return console.log("Error, edad inválida. Por favor ingrese un número válido.")}

if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad == 21){
    console.log("Bienvenido, te felicito por llegar a los 21 años")
}else {
console.log("Puede pasar al bar y tomar alcohol.")
}

if (edad % 2 !== 0){
console.log("Sabias que tu edad es impar?")
}
*/

/*
//2

function totalAPagar (vehiculo, litrosConsumidos){
    if(vehiculo = "coche" && litrosConsumidos >= 0 && litrosConsumidos <= 25) {return (litrosConsumidos * 86) + 50};
    if (vehiculo = "coche" && litrosConsumidos > 25) {return (litrosConsumidos * 86) + 25};
    if (vehiculo = "moto" && litrosConsumidos >= 0 && litrosConsumidos <= 25) {return (litrosConsumidos * 70) + 50};
    if (vehiculo = "moto" && litrosConsumidos > 25) {return (litrosConsumidos * 70) + 25};
    if (vehiculo = "autobus" && litrosConsumidos >= 0 && litrosConsumidos <= 25) {return (litrosConsumidos * 55) + 50};
    if (vehiculo = "autobus" && litrosConsumidos > 25) {return (litrosConsumidos * 55) + 25};
}


console.log(totalAPagar("coche", 10))

console.log(-------------YA TERMINADO---------------)
*/

const prompt = require("prompt-sync")({ sigint: true });


let pide = prompt("Que sandwich quiere?: ")
let pidePan = prompt("Que tipo de pan?: ")

let sandwich = function (pide, pidePan){
    let total = 0;
if (pide == "pollo") {total += 150}
if (pide == "carne"){total +=200}
if (pide == "veggie") {total += 100}
if (pidePan == "blanco") {total += 50}
if (pidePan == "negro") {total += 60}
if (pidePan == "s/gluten") {total+= 75}


}


console.log(sandwich(pide, pidePan))


//console.log("------------------cambio de ejercicio----------------")


/*
function abrirParacaidas(velocidad, altura){
if (velocidad <1000 && altura >=2000 && altura < 3000) {
    return "Abri el paracaidas"
}else if (velocidad > 1000 || altura < 1000){
    return "A tocar el arpa"
} else if (velocidad < 1000 && altura > 3000) {
    return "Podes abrirlo, pero corres peligro"
}
}

console.log(abrirParacaidas(999, 3500))


const prompt = require("prompt-sync")({ sigint: true });

let valoracion = parseInt(prompt("Cual es tu valoracion?: "))

function valor(valoracion) {
    if (valoracion < 3) {
    console.log("Lamentamos que la película haya sido muy mala.");
    } else if (valoracion >= 3 && valoracion <= 5) {
    console.log("Lamentamos que la película haya sido mala.");
    } else if (valoracion > 5 && valoracion <= 7) {
    console.log("Lo sentimos por no cumplir tus expectativas.");
    } else if (valoracion > 7 && valoracion <= 9) {
    console.log("Nos alegra que te haya gustado la película.");
    } else if (valoracion > 9 && valoracion < 10) {
    console.log("Nos enorgullece haber sido parte de tu día, gracias por valorar tan alto la película.");
    } else if (valoracion === 10) {
    console.log("Nos parece FANTÁSTICO que te haya parecido un 10 nuestra película. Nos esforzamos para que sea así siempre. ¡Gracias!");
    } else {
    console.log("Valoración inválida. Por favor, ingresa un número del 1 al 10.");
    }
    return "Gracias por tu visita y disculpa las molestias.";
}

console.log(valor(valoracion))

const prompt = require("prompt-sync")({ sigint: true });

let palabra = prompt("Ingresa palabra para ser traducida: ")

function traducir (){
switch (palabra) {
    case "casa" : console.log("House")
    break; 

    case "perro" : console.log("Dog")
    break;

    case "pelota" : console.log("Ball")
    break;

    case "arbol" : console.log("Tree")
    break

    default : console.log("Invalido")
    break;
}
}
traducir()

*/