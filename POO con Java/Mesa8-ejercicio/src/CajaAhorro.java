public class CajaAhorro extends Cuenta{
private Double interes;
    public CajaAhorro(Cliente cliente, Double saldo, Double interes) {
        super(cliente, saldo);
        this.interes=interes;
    }
    public void cobrarInteres() {
            Double saldoConInteres = getSaldo() * (1 + (interes / 100));
        System.out.println("Su saldo con intereses es de: "+saldoConInteres);
        }

}
