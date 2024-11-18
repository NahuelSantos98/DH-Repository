const PromptSync = require("prompt-sync")

let temperatura = 10
let estaLloviendo = false
let piso = 9
let horaActual = 10.30
let horaApertura = 9
let horaCierre = 18
let cantidadQueso = 100
let deuda = 200


//Nosotros

const prompt = require("prompt-sync")({ sigint: true });

let hora = 9
//let sonoAlarma = prompt('Sonó la alarma?: ')
let levantarse = true
let banarse = false
//let desayunoPreparado = prompt('El desayuno esta preparado?: ')
let horaEntrada = 10.30
let salirHora = 10
let llegar = 10.25

//2
let diasViaje = 3
let bolso = true
let medias = 5
let remera = 5
let malla = true
let calzones = 6
let zapatillas = 2
let abrigo = true

//Extra
let cajonPantalon = 'Remeras'
let cajonRemeras = 'Pantalon'
let pantalon = 'Pantalon'

cajonRemeras = cajonPantalon
cajonPantalon = pantalon


console.log(cajonPantalon)
console.log(cajonRemeras)