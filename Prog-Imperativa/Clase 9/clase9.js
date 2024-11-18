const prompt = require("prompt-sync")({ sigint: true });

//1
//let frase = prompt('Ingresa tu frase: ')
function frasesConsola (frase) {
    console.log(frase)
}
//frasesConsola(frase)

//2

//let nombre = prompt('Ingresa tu nombre: ')

function saludar (nombre){
    console.log('Hola ' + nombre + '!!!')
}
//saludar(nombre)

//3

//let numero1 = parseInt(prompt('Ingresa numero1: '))
//let numero2 = parseInt(prompt('Ingresa numero2: '))

function sumar (numero1, numero2) {
    let resultado = numero1 + numero2
    console.log(resultado)
}
//sumar(numero1, numero2)


//4

//let anio = parseInt(prompt("En que año naciste?: "))

function edad (anio){
    let resultado = 2023 - anio
    console.log("Tienes " + resultado + " años")
}
//edad(anio)


//5

function random() {
    let numero = Math.floor(Math.random()*10+1)
    let ingrese = parseInt(prompt('Ingrese un numero entre 1 y 10: '))
    if(ingrese == numero) {
        console.log('Felicitaciones Adivinaste!!')} 
        if (ingrese !== numero) {
        console.log('Intente denuevo')
        random()
        }
}
//random()

//6

function pares(){
    for (let i = 0; i <= 100 ; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}
//pares()

//7
const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

function mostrar(nombres){
    for (let i=0; i < nombres.length; i++){
        console.log(nombres[i])
    }
}
//mostrar(nombres)

//8

//let numeroPorcentaje = parseInt(prompt('Ingrese un numero: '))

function porcentaje (numeroPorcentaje) {
    if(numeroPorcentaje > 500){
        let resultado = numeroPorcentaje * 0.18
        console.log('El 18% de ' + numeroPorcentaje + " es " + resultado)
    } else {
        console.log('Su numero no cumple las condiciones para que pueda sacarle un porcentaje')
    }
}
//porcentaje(numeroPorcentaje)

//9
let arreglo = [0, 1, 2, 3, 4, 5];
function elemento(arreglo) {
if (arreglo.length >= 3) {
    return arreglo[2];
} else {
    return -1;
}
}
//console.log(elemento(arreglo));


