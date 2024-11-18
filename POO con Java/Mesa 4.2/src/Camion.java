public class Camion {
    //atributos
    private String marca;
    private String patente;
    static private double valorCombustible; //Se defina la variable como static, esto hace que no se pueda usar con un objeto.

    //constructor
    public Camion (String marca, String patente){
        this.marca=marca;
        this.patente=patente;
    }

    //metodos
    public double gastoCombustible (int litros){
        return litros*Camion.valorCombustible;
    }
    static public void cambiarPrecioCombustible(double precio){ //Se define el metodo como static, esto hace que no se pueda usar con un objeto
        Camion.valorCombustible=precio;
    }
}
