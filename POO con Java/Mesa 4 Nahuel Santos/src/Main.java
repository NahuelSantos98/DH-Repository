public class Main {
    public static void main(String[] args) {
Articulo articulo =new Articulo("Articulo 1", 100, 1100.00 ); //Creamos el objeto dentro de la clase
if (articulo.hayStock()){
    System.out.println("Hay stock disponible"); //si hay stock
}
        System.out.println("El precio de venta es: "+ articulo.consultarPrecio()); //Para ver cual es el precio
    }
}