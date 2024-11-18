const {generateText , validateInput} = require("../util.js");

describe('Tests form estudiantil', () => {   //Abre una carpeta para tener mas organizacion

test("test 1", () =>{        //Edad entre parametros y nombre y nivel OK (Linea 3)
    expect(generateText("a", 20,"c")).toBe("Registro OK de a en: c.");
});
test("test2", () =>{        //Edad mayor a 65, no deberia tomarse. En el codigo (Linea 11)
    expect(generateText("a", 93,"c")).toBe("No pudimos registrar a: a. Por favor contactá a soporte@dh.com para más información.");
});
test("test3", () =>{  //
    expect(validateInput("/")).toBeTruthy();
});
test("test4", () =>{
    expect(validateInput(" ")).toBeTruthy();
});
test("test5", () =>{
    expect(validateInput("", false)).toBeFalsy();
});
test("test6", () =>{
    expect(generateText("mateo", 17, " ")).toBe('Edad ingresada no válida. Por favor intentá nuevamente.');
});
test("test7", () =>{
    expect(validateInput(0)).toBeFalsy();
});
test("test8", () =>{
    expect(validateInput(" ", true)).toBeFalsy();
} )
});

