const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// a, b, c
function nuevoArray (){
let arrayMenor = []
let arrayMayorIgual = []
let arrayIgual= []
for (let i = 0; i < edades.length; i++){
    if (edades[i] < 18){
        arrayMenor.push(edades[i])
    } else if(edades[i] > 18){
        arrayMayorIgual.push(edades[i])
    } else if (edades[i] === 18) {
        arrayIgual.push(edades[i])
    }
}
console.log(arrayMenor)
console.log(arrayMayorIgual)
console.log(arrayIgual)
}
//nuevoArray()

function mayor(){
    let aux = edades[0]
    for (let i = 0; i < edades.length; i++){
        if (edades[i] > aux){
            aux = edades[i]
        }
    }
console.log(aux)
}
//mayor()

function menor(){
    let aux = edades[0]
    for (let i = 0; i < edades.length; i++){
        if (edades[i] < aux){
            aux = edades[i]
        }
    }
console.log(aux)
}
//menor()

function promedio(){
    let total = 0
    for (let i = 0; i < edades.length; i++){
        total += edades[i]
    }
    let prom = total / edades.length
    console.log(prom)
}
//promedio()


function aumentarEdad (){
    for (let i = 0; i < edades.length;i++){
        edades[i]++
    }
    console.log(edades)
}
//aumentarEdad()


const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

function arrays () {
let menor30= []
let mayorIgual = []
let menorIgual = []

for (let i = 0; i < arrayCuentas.length; i++){
    if (arrayCuentas[i].edadTitular < 30) {
        menor30.push(arrayCuentas[i])
    }else if (arrayCuentas[i].edadTitular > 30){
        mayorIgual.push(arrayCuentas[i])
    } else {
        menorIgual.push(arrayCuentas[i])
    }
}
console.log(menor30)
console.log("----------------------------------)")
console.log(mayorIgual)
console.log("----------------------------------)")
console.log(menorIgual)
}
//arrays()


function titularJoven (){
    let menor = arrayCuentas[0]
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular < menor.edadTitular) {
            menor = arrayCuentas[i]
        }
    }
    console.log(menor)
}
//titularJoven()

function cuentasHab () {
    let habilitadas = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada == true) {
            habilitadas.push(arrayCuentas[i])
        }
    }
    console.log(habilitadas)
}
//cuentasHab()

function cuentasDes () {
    let deshabilitadas = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada != true) {
            deshabilitadas.push(arrayCuentas[i])
        }
    }
    console.log(deshabilitadas)
}
//cuentasDes()

function menorSaldo () {
    let men = arrayCuentas[0]
    for (let i = 0; i < arrayCuentas.length; i++){
        if (arrayCuentas[i].saldo < men.saldo){
            men = arrayCuentas[i]
        }
    }
console.log(men)
}
//menorSaldo()


function mayorSaldo () {
    let may = arrayCuentas[0]
    for (let i = 0; i < arrayCuentas.length; i++){
        if (arrayCuentas[i].saldo > may.saldo){
            may = arrayCuentas[i]
        }
    }
console.log(may)
}
//mayorSaldo()

/*
function generarID (arrayCuentas) {
    for (let i=0; i<arrayCuentas.length; i++){
        arrayCuentas.push(arrayCuentas[id].id)
        
    }
}
*/

function filtrarPorSaldos (saldoIngresado){
let saldos = []
    for (let i =0; i < arrayCuentas.length; i++){
        if (saldoIngresado > arrayCuentas[i].saldo){
            saldos.push(arrayCuentas[i])
        }
    }
    console.log(saldos)
}
//filtrarPorSaldos(5000)

function agregarId () {
    let identificador = 0
    for (let i=0; i < arrayCuentas.length; i++){
        arrayCuentas[i].id = ++identificador
    }
return arrayCuentas
}
agregarId()

function buscarPorId (id) {
    for (let i=0; i < arrayCuentas.length; i++){
        if (id === arrayCuentas[i].id){
            console.log(arrayCuentas[i])
        }
    }
}
buscarPorId(2)