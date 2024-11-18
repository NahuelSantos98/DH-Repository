let arrayMascotas = [
{
    nombre: "kira", 
    raza: "caniche", 
    edad: 2,
    sonido: "guau", 
    hablar: () => console.log(this.sonido + " " + this.sonido)
},
{
    nombre: "luna", 
    raza: "gato", 
    edad: 7,
    sonido: "miau", 
    hablar: () => console.log(this.sonido + " " + this.sonido)
},
{
    nombre: "fran", 
    raza: "pez", 
    edad: 12,
    sonido: null, 
    hablar: () => console.log(this.sonido + " " + this.sonido)
}
]


function aumentarEdad () {
    for (let i=0; i < arrayMascotas.length; i++){
        arrayMascotas[i].edad++
    }
    console.log(arrayMascotas);
}
//aumentarEdad()

function aumentarEdad2 () {
    for (let i=0; i < arrayMascotas.length; i++){
        if (arrayMascotas[i].edad < 6){
            arrayMascotas[i].edad++
        }else if (arrayMascotas[i].edad > 6 && arrayMascotas[i].edad < 10){
            arrayMascotas[i].edad += 2
        }else if(arrayMascotas[i].edad > 10){
            let mitadEdad = arrayMascotas[i].edad / 2
            arrayMascotas[i].edad += mitadEdad
        }
    }
    console.log(arrayMascotas)
}
//aumentarEdad2()

function agregarId () {
    let identificador = 0
    for (let i=0; i < arrayMascotas.length; i++){
        arrayMascotas[i].id = ++identificador
    }
return arrayMascotas
}
console.log(agregarId())








