import org.w3c.dom.ls.LSOutput;

public abstract class Cuenta {
    private Cliente cliente;
    private Double saldo;

    public Cuenta(Cliente cliente, Double saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }

    public void depositar(Double monto){
        saldo += monto;
    };

    public void extraer(Double monto){
        if (monto < saldo){
        saldo-= monto;
        }else {
            System.out.println("Saldo insuficiente, no puede extraer.");
        }
    };

    public Double mostrarSaldo(){
        System.out.println("Usted tiene: "+saldo);
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public Double getSaldo(){
        return saldo;
    }
}
