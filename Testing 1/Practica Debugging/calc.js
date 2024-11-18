/*
function suma (a, b){
    return a+b; 
}
*/

function suma (a,b){
    if (isNaN(a) || isNaN(b)){
        return 0;
    } else return a+b;
}
module.exports =suma;

//console.assert(suma(1,2)==3, 'ERROR, tiene que ser 3') 
//console.assert(suma(0,0)==0, 'ERROR, tiene que ser 0')