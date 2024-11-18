

const suma = require('../calc.js');

describe('Pruebas de Suma',() => {

    test('Suma de numeros', () =>{
        expect(suma(1,2)).toBe(3)  //Dado a los valores que se recibem, tiene que retornar 3.
    })      
    
    test ('Suma de dos numeros', ()=> {
        expect(suma(0,0)).toBe(0)       //Espera que el valor retornado sea 0.
    })

    test('Suma de letras',() => {
        expect(suma('f','z')).toBe(0) //Si el valor dado es NaN, va a devolver 0 (En el codigo se aclaró)
    })

    //Arrow function te da flexibilidad 

})


//Sin estar agrupadas
/*
test('Suma de numeros', () =>{
    expect(suma(1,2)).toBe(3)
})      

test ('Suma de dos numeros', ()=> {
    expect(suma(0,0)).toBe(0)
})*/