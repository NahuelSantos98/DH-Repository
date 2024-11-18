public class Vaca extends Animal {
    private Double peso;

    public Vaca(String nombre, Double energia, Double peso) {
        super(nombre, energia);
        this.peso=peso;
    }

    @Override
    public void comer(Double cantidadComida) {
   super.comer(cantidadComida);
   peso+=cantidadComida/2;
        System.out.println(peso);
    }

    @Override
    public void hacerRuido() {
        System.out.println("Muuuu!");
    }

    @Override
    public String toString() {
        return super.toString() + "/peso: " + peso;

    }
}
