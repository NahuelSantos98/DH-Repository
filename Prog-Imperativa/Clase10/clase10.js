let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]


function mayusculas(){
for (let i =0; i < peliculas.length; i++){
    peliculas.push(peliculas[0].toUpperCase())
    peliculas.shift(peliculas)
}
return peliculas
}
console.log(mayusculas(peliculas))



function mayusculas2(){
    for (let i =0; i < peliculas.length; i++){
        peliculas2.push(peliculas2[0].toUpperCase())
        peliculas2.shift(peliculas2)
    }
    return peliculas2
    }
console.log(mayusculas2(peliculas2))

peliculas2.join()
peliculas.push(peliculas2)



//console.log(peliculas2)