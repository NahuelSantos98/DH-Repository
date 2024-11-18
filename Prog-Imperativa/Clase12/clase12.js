

const alicia = [10, 80, 75];
const bob = [90, 20, 25];


function encontrarGanador(a, b) {
   let ganoBob = 0;
   let ganoAlicia = 0;
for (let i = 0; i <= alicia.length; i++){
if(a[i] > b[i]){ganoAlicia++
}else {ganoBob++
}
}
if (ganoBob > ganoAlicia) {console.log("Gano Bob")}else {console.log("Gano Alicia")}
}


let ganador = encontrarGanador(alicia, bob)
//encontrarGanador(alicia, bob);





