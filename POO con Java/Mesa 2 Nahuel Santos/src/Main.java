import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner;
        scanner= new Scanner(System.in);
        String nombre;
        char inicial;
        System.out.println("ingrese un string: ");
        nombre = scanner.nextLine();
        inicial=nombre.charAt(0);
        System.out.println(inicial);
        System.out.println(nombre);

    }
}