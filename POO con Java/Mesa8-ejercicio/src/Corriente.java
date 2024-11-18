public class Corriente extends Cuenta {
    private Double descubierto;

    public Corriente(Cliente cliente, Double saldo, Double descubierto) {
        super(cliente, saldo);
        this.descubierto = descubierto;
    }

    @Override
    public void extraer(Double monto) {
        Double saldoTotal = getSaldo() + descubierto;
Double saldoSinDescubierto = saldoTotal - descubierto;
        if (monto <= saldoTotal) {
            if (monto <= getSaldo()) {
                System.out.println((saldoSinDescubierto -= monto) );
                System.out.println("Tiene la cantidad de: "+descubierto+" para gastar de descubierto");
            } else {
                Double montoExcedido = monto -getSaldo();
                descubierto -= montoExcedido;
                System.out.println("Usted esta utilizando el descubierto, cantidad restante: "+descubierto);
            }
        } else {
            System.out.println("Saldo insuficiente.");
        }
    }
}


