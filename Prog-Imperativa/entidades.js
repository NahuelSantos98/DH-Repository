let objetoLiteral = {
    nombre: 'Nahuel', 
    apellido: 'Santos', 
    mascota: true,
    anios: 18
}

//Recorrer objeto
//for (let i=0; i<objetoLiteral.length; i++){}


let matriz = [
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15]
]

//Recorrer matriz

/*
POR FILAS
for (let i=0; i<matriz.length; i++) { //recorre por fila

    for (let j=0; j<matriz[i].length; j++) { //recorre por columna

    }
}
*/

/* 
POR COLUMNAS
for (let i=0; i<matriz[0].length; i++) { //recorre por columna, en el matriz[0], va tomando el valor que le sigue. 
                                        El primero va a ser 0, el segundo 1

    for (let j=0; j<matriz[j].length; j++) { //recorre por fila

    }
}
*/


let bubbleSort = [2,1,3,4,6,5,8,7,10,9]

/*
for (let i=0;i<bubbleSort.length;i++){ //recorre el array

    for (let j=0; j< bubbleSort.length -1; j++){ //recorre las columnas, se le pone -1 porque el ultimo no se puede 
                                                    comparar con el siguiente porque no tiene
        
            if (bubbleSort[j] > bubbleSort[j + 1]) { //compara el que estas posicionado con el siguiente (por eso el +1)
            
                let temp = bubbleSort[j]; //Declaramos una variable para que ocupe el espacio
            
            bubbleSort[j] = bubbleSort[j + 1]; // pisa el valor del que estamos 
            
            bubbleSort[j + 1] = temp; // le poner el valor para moverlo de posicion 
        }
    }
}

console.log(bubbleSort)
*/


/* Para crear por fila una matriz 

function crearMatriz (filas,columnas){
let matrizCompleta = []
let contador = 1

for(let i=0; i< filas; i++){ //para recorrer por filas
let columna=[]
for (let j=0;j<columnas; j++){ //recorre columna
columna.push(contador++)
}
matrizCompleta.push(columna)
}
console.log(matrizCompleta)
}


crearMatriz(3,4)
*/


/* Para ver si estan ordenados o no


function orden(arr){
for (let i=0; i <arr.length - 1; i++){ // acordarse del -1 cuando quiero comparar
    if( arr[i] > arr[i+1]){
        return "Esta desordenado"
    }else{
        return "Esta desordenado"
    }
}
}
console.log(orden([2,4,1,3,5]))
*/
