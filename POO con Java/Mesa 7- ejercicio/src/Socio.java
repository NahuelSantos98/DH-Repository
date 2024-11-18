public class Socio {
    private Integer numeroSocio;
    private String nombre;
    private Double cuotaMensual;
    private String actividad;

    //constructor


    public Socio(Integer numeroSocio, String nombre, String actividad, Double cuota) {
        this.numeroSocio = numeroSocio;
        this.nombre = nombre;
        this.actividad=actividad;
        this.cuotaMensual= 500.00;
    }
    public Double calcularCostoMensual(){
        return cuotaMensual;
    }



}
