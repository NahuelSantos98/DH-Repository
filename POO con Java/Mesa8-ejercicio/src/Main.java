public class Main {
    public static void main(String[] args) {
        Cliente clienteA = new Cliente(1,"Santos",2023, 3 );
        CajaAhorro cliente1 = new CajaAhorro(clienteA, 200.00, 50.00);
        cliente1.depositar(100.00);
        cliente1.extraer(150.00);
        cliente1.mostrarSaldo();
        cliente1.cobrarInteres();
        System.out.println("--------------------------------");

        Cliente clienteB = new Cliente(2,"Cruz",2022, 2 );
        Corriente cliente2 = new Corriente(clienteB, 300.00, 200.00);
        cliente2.extraer(301.00);


    }
}