
function multiplo5 (numero) {
    let sumar = numero + 10
    if (sumar %5 == 0){
        console.log(numero + " + 10 es múltiplo de 5")
    } else (
        console.log(numero + " + 10 NO es múltiplo de 5")
    )
}
multiplo5(2)
multiplo5(5)

console.log('---------------------------------------SEPARADOR CODIGO-----------------------------------')



function multiplicacion (num1, num2){
    let multiplicar = num1 * num2
    console.log(multiplicar)
}
multiplicacion(2, 5)


console.log('---------------------------------------SEPARADOR CODIGO-----------------------------------')


let arregloNumeros = [2, 4, 5, 3, 5]

function sumaArreglo () {
    let sumaTotal = 0
for (let i =0; i < arregloNumeros.length; i++){
    sumaTotal += arregloNumeros[i]
}
console.log(sumaTotal)
}
sumaArreglo()

console.log('-------------------------------------------------------------------------------------------------------------')


let empresa = {
    nombre: 'La Vaca Lola',
    actividad: 'Mercado Carniceria',
    //sueldos: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], (Caso en el que NO se encuentra en quiebra)
    sueldos: [70000, 60000, 50000, 40000, 30000, 20000, 15000, 10000, 7000, 1000],
    calcularSueldos: function () {
        let suma = 0
        for (let i=0; i < this.sueldos.length; i++){
            suma += this.sueldos[i]
        }
        if (suma > 200000 ){
            console.log('La empresa ' + this.nombre + ' se encuentra en quiebra ya que su pago de sueldos es de ' + suma + ' por lo tanto, necesita hacer un ajuste en sus empleados')
        } else {
            console.log('La empresa ' + this.nombre + ' esta bien economicamente, ya que su pago de sueldos es de ' + suma + ' por lo tanto, NO necesita hacer un ajuste en sus empleados')
        }
    }
}
empresa.calcularSueldos()

console.log('-------------------------------------------------------------------------------------------------------------')


let libros = []

let historiasInconscientes = {
    anio  : 2013,
    autor : "Gabriel Rolón",
    paginas: 352
}
let elAlquimista = {
    anio  : 1988,
    autor : "Paulo Coehlo",
    paginas: 192
}
let elCampamento = {
    anio  : 2021,
    autor : "Blue Jeans",
    paginas: 480
}
let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}


libros.push(historiasInconscientes)
libros.push(elAlquimista)
libros.push(elCampamento)
libros.push(operacionMasacre)



console.log(libros)


console.log('---------------------------------------SEPARADOR CODIGO-----------------------------------')

function pandemico () {
    for (let i=0; i < libros.length; i++){
        let libro = libros[i]
        if (libro.anio < 2020) {
            libro.epoca = 'pre-pandemia'
        } else {
            libro.epoca = 'post-pandemia'
        }

    }
}
pandemico(libros)
console.log(libros)