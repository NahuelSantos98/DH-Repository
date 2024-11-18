public class Cliente {
        private String nombre;
        private String apellido;
        private String dni;
        private Double saldoEnCuenta;
        private Double limite;
        private Double deuda;

    public Cliente(String nombre, String apellido, String dni, Double saldoEnCuenta, Double limite, Double deuda) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldoEnCuenta = saldoEnCuenta;
        this.limite = limite;
       this.deuda = 0.0;
    }

    public void comprar (Double importe) throws ClienteException{

        if(deuda+importe>limite){
            throw new ClienteException("Limite superado, NO puede comprar mas.");
        }
        deuda+=importe;

    }

   public void saldarDeuda (Double importe) throws ClienteException {
        if(importe>deuda){
throw new ClienteException("No regales tu plata");
        }
       deuda-=importe;
   }
    @Override
    public String toString() {
        return "Cliente{" +
                nombre + ' ' +
                apellido + ' ' +
                ", su deuda es=" + deuda + "$ }";
    }



}

