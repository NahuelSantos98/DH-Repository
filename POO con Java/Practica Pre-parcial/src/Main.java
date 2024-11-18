public class Main {
    public static void main(String[] args) {
        Capitan capitanVelero = new Capitan("Nahuel", "Santos", 0000);
        Capitan capitanYate = new Capitan("Barry", "Allen", 1111);
        Velero velero1= new Velero (200.0, 100.0, 2020, 20, capitanVelero, 5 );
        Yate yate1 = new Yate(300.0, 100.0, 2020, 20, capitanYate, 2);
        Yate yate2= new Yate(100.0,100.0, 2020, 20, capitanYate, 2 );
        Yate yate3 = new Yate(100.0,100.0, 2020, 20, capitanYate, 4 );



        System.out.println(velero1.montoAlquiler()); //300 si año es mas que 2020, si es 2020 o menor devolver 200
        System.out.println(velero1.esGrande()); //Mastiles mayor o igual a 4 es true

        System.out.println(yate1.montoAlquiler()); //400 si año es mayor a 2020, 300 si es menor o igual a 2020
        System.out.println(yate1.compareTo(yate2)); // Yate 1 es igual a yate 2
        System.out.println(yate2.compareTo(yate3)); // Yate 2 es menos lujoso que yate 3
        System.out.println(yate3.compareTo(yate1)); // Yate 3 es mas lujoso
        // 1=Mas lujoso, -1=Menos lujoso, 0=Iguales
    }
}