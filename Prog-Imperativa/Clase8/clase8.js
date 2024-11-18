const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Que numero queres?: "))

function siguiente(numero) {
    for (let i = 0; i <= 10; i++){
        console.log(numero + i)
    }
}
//siguiente(numero)

//2 

function cada3 () {
    for (let i = 5; i <= 20; i+= 3){
        console.log(i)
    }

}

//cada3()


//3

function al100 () {
    for (let i = 0; i <= 100; i++){
        console.log(i)
    }
}

//al100()


//4

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i; //Le estas sumando a i el resultado de la vuelta anterior, cada vuelta se suma.
    }
    return resultado;
}
console.log(factorial(numero));