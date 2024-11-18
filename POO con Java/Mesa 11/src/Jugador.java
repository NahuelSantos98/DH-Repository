public class Jugador implements Comparable<Jugador>{
    private Integer nroCamiseta;
    private String nombre;
    private Boolean esTitular;
    private Boolean lesionado;

    public Jugador(Integer nroCamiseta, String nombre, Boolean esTitular, Boolean lesionado) {
        this.nroCamiseta = nroCamiseta;
        this.nombre = nombre;
        this.esTitular = esTitular;
        this.lesionado = lesionado;
    }


    @Override
    public int compareTo(Jugador otroJugador) {
        return this.nroCamiseta.compareTo(otroJugador.nroCamiseta); //Qué vamos a comparar
    }

    public Boolean getEsTitular() {
        return esTitular;
    }

    public Boolean getLesionado() {
        return lesionado;
    }

    @Override
    public String toString() {
        return "Nombre: "+nombre+" N° Camiseta:"+nroCamiseta;
    }
}
