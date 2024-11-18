
/*function mostrarDecimales() {
    let decimal = 0.1;
    for (let i = 1; i <= 9; i++) {
    console.log(i + decimal.toFixed(1));
    decimal += 0.1;
    }
}

mostrarDecimales();
*/

/*
function de3en3 () {
    for (let i=5; i<=20; i+= 3){
        console.log(i)
    }
}

de3en3()
*/

/*
function suma100 (){
    let total=0
    for (let i=0; i <=100; i++){
        total += i
    }
console.log(total)
}
suma100()
*/

/*
let string = "Hola, como estas?";

function contarVocales() {
    let cantidadVocales = 0;
    const vocales = ["a", "e", "i", "o", "u"];
    
    for (let i = 0; i < string.length; i++) {
    let caracter = string[i].toLowerCase();
    
    if (vocales.includes(caracter)) {
        cantidadVocales++;
    }
    }
    
    console.log(cantidadVocales);
}
contarVocales()
*/

/*
let lista = [8,3,2,4,7,6,5,1]

function darVuelta(){
    for (let i=0;i<lista.length;i++){

        for (let j=0; j< lista.length -1; j++){
            if (lista[j] < lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    
    console.log(lista)
}
darVuelta()
*/

function crearMatriz(filas, columnas) {
    let matriz = []
    let contador = 1

    for (let i=0;i<filas;i++){ //recorre por filas

        let columna = [] //Se asigna para despues pushear a matriz

        for (let j=0; j<columnas; j++){ //recorre columnas

            columna.push(contador++) //Se pushea a columna el contador sumandole 1 siempre

        }
        matriz.push(columna) //para pushear las columnas ya hechas
    }
    return matriz
}

console.table(crearMatriz(3, 4))