let matriz1 = [
    [2, 4, 6, 8, 10],
    [12, 14, 16, 18, 20],
    [22, 24, 26, 28, 30],
    [32, 34, 36, 38, 40],
    [42, 44, 46, 48, 50] 
];


function sumarTodos () {
    let sumaTotal = 0
for (let fila = 0; fila <matriz1.length; fila++) {
    for (let columna= 0; columna < matriz1[fila].length; columna++){
        sumaTotal += matriz1[fila] [columna]
    }
}
console.log(sumaTotal)
}
//sumarTodos()



function generarMatriz10por10 (filas, columnas) {
    let num = 1
    let matriz2 = []
    for (let i=0; i<filas; i++){
        let fila =[]
        for (let j=0; j<columnas; j++){
            fila.push(num)
            num++
        }
        matriz2.push(fila)
    }
	return matriz2;
}

let matriz10por10 = generarMatriz10por10(10, 10);
console.log(matriz10por10);


function sumaDiagonal (m) {
    let j=0
    let suma = 0

for (let i=0; i < m.length; i++){
suma+= m[i][j]
j++
}
return suma
}

//console.log(sumaDiagonal(matriz10por10))

function sumaDiagonalReverse (ma) {
    ma.reverse()
    return sumaDiagonal(ma)
}
//console.log(sumaDiagonalReverse(matriz10por10))