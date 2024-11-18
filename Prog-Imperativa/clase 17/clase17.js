let diaSemana = [
    [1135, 2500, 900, 1600, 2800,3650,1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]




//SEMANA
//por fila
function sumarTotal (fila){
    let suma= 0
    for (let columna=0; columna<diaSemana[fila].length;columna++){
        suma += diaSemana[fila][columna]
    }
console.log(suma)
}
//sumarTotal(2)

//Por DIA
//por columna
function dia(dia){
let sumaDeDias = 0
for (let i=0; i<diaSemana.length;  i++){
sumaDeDias += diaSemana[i][dia]
}
console.log(sumaDeDias)
}
//dia(3)


//Gasto mes total
function gastosMes(){
let total = 0
for (let fila = 0; fila <diaSemana.length; fila++) {
    for (let columna= 0; columna < diaSemana[fila].length; columna++){
        total += diaSemana[fila] [columna]
    }
}
console.log(total)
}
//gastosMes()


let numeros = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

function sumar() {
    let suma = 0;
    for (let fila = 0; fila < numeros.length; fila++) {
    for (let columna = 0; columna < numeros[fila].length; columna++) {
        if (numeros[fila][columna] >= 10 && numeros[fila][columna] < 1000) {
        suma += numeros[fila][columna];
        }
    }
    }
    console.log(suma);
}
//sumar();