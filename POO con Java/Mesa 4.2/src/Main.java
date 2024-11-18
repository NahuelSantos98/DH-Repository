public class Main {
    public static void main(String[] args) {
        Camion miCamion = new Camion("Ford", "AA 111 AA"); //Creamos el objeto de la clase camion
        Camion.cambiarPrecioCombustible(98.50); //Utilizamos el metodo de clase a traves de la clase y NO del objeto
        System.out.println("Gasto: "+ miCamion.gastoCombustible(40));
    }
}