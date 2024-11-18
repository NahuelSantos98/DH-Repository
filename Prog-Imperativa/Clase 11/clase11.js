let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco ={
    clientes: arrayCuentas,
    consultarCliente: function (titular){
        for (let i = 0; i < arrayCuentas.length; i++){
            if (titular == this.clientes[i].titularCuenta){
                console.log(arrayCuentas[i])
            } 
        }
    },

    deposito: function (titular, cantDinero){
        for (let i = 0; i < arrayCuentas.length; i++){
            if (titular == this.clientes[i].titularCuenta){
                let total = cantDinero + this.clientes[i].saldoEnPesos
                console.log("Deposito realizado, su nuevo saldo es: " + total)
            }
        }
    },

    extraccion: function (titular, montoExtraer){
        for (let i = 0; i < arrayCuentas.length; i++){
            if (titular == this.clientes[i].titularCuenta){ 
                let total = this.clientes[i].saldoEnPesos - montoExtraer
                console.log("Extraccion realizada con exito, su nuevo saldo es: " + total)
            } 
            if ( montoExtraer > this.clientes[i].saldoEnPesos){
                console.log("Se quedo sin dinero panita")
            }
        }
    }
    }


//banco.consultarCliente("Ansel Ardley")
//banco.deposito("Ansel Ardley", 30000)
//banco.extraccion("Ansel Ardley",200 )