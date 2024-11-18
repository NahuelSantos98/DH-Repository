
//1. 

let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]


function mayor1800 (){
    let mayores = [];
    for (let i=0; i<cuadros.length; i++){
        if (cuadros[i].creacion > 1800){
            mayores.push(cuadros[i]);
        }
    }
    console.log(mayores)
}

mayor1800()


//2. 
function ordenar(cuadros, string) {
    for (let i = 0; i < cuadros.length; i++) {
        for (let j = 0; j < cuadros.length - 1; j++) {
            if (cuadros[j].creacion > cuadros[j + 1].creacion && string.toLowerCase() === 'asc') {
                let temp = cuadros[j];
                cuadros[j] = cuadros[j + 1];
                cuadros[j + 1] = temp;
            }
            if (cuadros[j].creacion < cuadros[j + 1].creacion && string.toLowerCase() === 'desc') {
                let temp = cuadros[j];
                cuadros[j] = cuadros[j + 1];
                cuadros[j + 1] = temp;
            }
        }
    }
    console.log(cuadros);
}

ordenar(cuadros, 'DESC');
//ordenar(cuadros, 'ASC')


//3. 
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

//a. 

function sumar() {
    let total = 0;
    for (let i = 0; i < matriz[1].length; i++) {
        total += matriz[1][i];
    }
    console.log(total);
}

sumar();

//b.

function pares(){
    let pares =[];
    for (let i=0; i<matriz.length; i++) {
        for (let j=0; j<matriz[i].length; j++) { 
            if (matriz[i][j] %2 ==0){
                pares.push(matriz[i][j]);
            }
        }
    }
    console.log(pares);
}

pares();