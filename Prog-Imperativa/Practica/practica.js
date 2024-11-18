
/*
//arrays dentro de arrays.

let variablearray = ["Nombre", true, 34, "Apellido"]
let segundo = ["Hola", "cheto", 32, variablearray]
console.log(segundo[3][2])


//metodo .push()

let colores = ['azul', 'violeta', 'rojo', 'verde'];
colores.push( 'amarillo', 'blanco')

console.log(colores[4])

//metodo .pop()

let colors = ['azul', 'violeta', 'rojo', 'verde'];
let borrar = colors.pop(); 
console.log(borrar) //Devuelve verde (Dato borrado) 

//Metodo .shift()

let colores1 = ['azul', 'violeta', 'rojo', 'verde'];
let borrar1 = colors.shift(); 
console.log(borrar1)//Devuelve azul (Dato borrado)


//Metodo .unshift()

let colores2 = ['azul', 'violeta', 'rojo', 'verde'];
let agregar = colores2.unshift("dato", "agregado"); 
console.log(colores2)
console.log(colores2[1])

//Metodo .indexOf()

let colores3 = ['azul', 'violeta', 'rojo', 'verde'];
let buscar = colores3.indexOf("rojo"); 
console.log(buscar) // Devuelve 2 por donde esta el valor puesto en ()


//Metodo .join()

let colores4 = ['azul', 'violeta', 'rojo', 'verde'];
let unir = colores4.join(" - "); 
console.log(unir) // Devuelve separado por lo que yo le ponga entre parentesis 


//Metodo .slice()

let cortar = "Hola, me llamo Nahuel Santos."
let parteCortada = cortar.slice(15, 30);
console.log(parteCortada)//Devuelve Nahuel Santos.

//Metodo .replace()

let contar = 'Hola, me llamo Nahuel Santos.'
let parteContada = contar.replace('Hola', 'Buen dia');
console.log(parteContada) // Devuelve “Buen dia, me llamo Nahuel Santos.”



//hola

function dominio (){
    let dh = 'hola digitalhouse.com.ar'
    let replace = dh.replace('hola ', 'http://www.')
    console.log(replace)
    }
    dominio();

*/

/*
//Objetos Literales

let miPais = {
    nombre: "Argentina", 
    poblacion: 400000000,
    capital: "CABA"
}
//console.log("La Capital de " + miPais.nombre + " es " + miPais.capital + " con población de " + miPais.poblacion)



//Metodo function dentro de un objeto

let miPais1 = {
    nombre: "Argentina",
    población: 400000000,
    capital: "CABA",
    decir: function() {
        return "Yo naci en " + this.nombre;
    },
}
//console.log(miPais1.decir())
*/ 



/*
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
        for(i=0; i <= cantidadHoras; i++){
        if (cantidadHoras = cantidadHoras){
            this.energia -= 5
            this.experiencia += 2
            }
        }
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(3);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);

console.log("Deportista experiencia: "+deportista.experiencia);



let persona = {
    nombre: "Juan Pablo", 
    edad: 29, 
    esMayordeEdad: true, 
}
persona.nombre = "Nahuel Santos"
persona.profesion = "Estudiante"
//console.log(persona) //No hace falta poner nigun replace ni nada, solo llamarlo y cambiarlo. 


npm i prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
*/

/*
BUBBLE SORT
let numeros = [6,5,1,2,4,3,8,7]

for (let i=0;i<numeros.length;i++){

    for (let j=0; j< numeros.length -1; j++){
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log(numeros)
*/

/*
let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

for (let i=0;i<personas.length;i++){

    for (let j=0; j< personas.length -1; j++){
        if (personas[j].estatura < personas[j + 1].estatura) {
            let temp = personas[j].estatura;
            personas[j].estatura = personas[j + 1].estatura;
            personas[j + 1].estatura = temp;
        }
    }
}

console.log(personas)
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