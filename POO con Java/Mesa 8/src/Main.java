import java.sql.SQLOutput;

public class Main {
    public static void main(String[] args) {
        Animal animalPato = new Pato("Lucas", 100.00);
        animalPato.hacerRuido();
        animalPato.comer(100.00);
        ((Pato) animalPato).nadar();
        System.out.println(animalPato); //para usar el .toString

        System.out.println("---------------------------------");

        Animal animalVaca=new Vaca("Lola", 100.00, 50.00);
        animalVaca.comer(100.00);
        animalVaca.hacerRuido();
        System.out.println(animalVaca); //.toString
        System.out.println("---------------------------------");
        Animal vaca2=new Vaca("Lola", 100.00, 50.00);
        System.out.println(animalVaca.equals(vaca2)); //Tira falso porque compara la posicion en la memoria.
    }
}