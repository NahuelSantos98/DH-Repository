public class Main {
    public static void main(String[] args) throws ClienteException{
        Cliente yo = new Cliente("Nahuel", "Santos", "1234", 500.0, 1000.0, 0.0);

    /*
    System.out.println(yo+ "  primero");
    yo.comprar(200.0);
    System.out.println(yo+"  segundo");
    yo.comprar(100.0);
    System.out.println(yo+"  tercero");
    //Si se supera el limite, no se ejecuta

    */
try {
    yo.comprar(200.0);
    yo.comprar(300.0);
    yo.saldarDeuda(600.0);
}catch (ClienteException exception){
            System.out.println(exception.getMessage());
        }

       System.out.println(yo);
        System.out.println("FIN");

    }
}