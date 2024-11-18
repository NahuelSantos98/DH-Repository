public abstract class Embarcacion {
    private Double precio;
    private Double adicional;
    private Integer anioFabricacion;
    private Integer eslora;
    private Capitan capitan;

    //constructor

    public Embarcacion(Double precio, Double adicional, Integer anioFabricacion, Integer eslora, Capitan capitan) {
        this.precio = precio;
        this.adicional = adicional;
        this.anioFabricacion = anioFabricacion;
        this.eslora = eslora;
        this.capitan = capitan;
    }

    public abstract Double montoAlquiler();

    public Integer getAnioFabricacion() {
        return anioFabricacion;
    }

    public Double getPrecio() {
        return precio;
    }

    public Double getAdicional() {
        return adicional;
    }
}
