public class Cliente {
    private Integer numeroCliente;
    private String nombre;
    private Double deuda;

    //constructor
    public Cliente (Integer numero, String nombre){
        numeroCliente=numero;
        this.nombre=nombre;
    }

    public void incrementarDeuda (Double valor){
        deuda+= valor;
    }

    public void pagarDeuda (){

    }
}
