public abstract class Animal {
    private String nombre;
    private Double energia;

    public Animal(String nombre, Double energia) {
        this.nombre = nombre;
        this.energia = energia;
    }

    public void comer(Double cantidadComida) {
       energia += cantidadComida;
        System.out.println("La energia que tiene es de: "+energia);
    }

    public abstract void hacerRuido();

    @Override
    public String toString() {
        return "Nombre:" + nombre + "/energia: " + energia;

    }
}

