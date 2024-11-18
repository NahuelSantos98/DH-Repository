public class Chancho extends Animal {

    public Chancho(String nombre, Double energia) {
        super(nombre, energia);
    }

    @Override
    public void hacerRuido() {
        System.out.println("Oink oink!");
    }
}
