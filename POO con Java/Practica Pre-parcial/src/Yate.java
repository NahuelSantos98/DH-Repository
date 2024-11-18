public class Yate extends Embarcacion implements Comparable<Yate> {
    private Integer camarotes;

    public Yate(Double precio, Double adicional, Integer anioFabricacion, Integer eslora, Capitan capitan, Integer camarotes) {
        super(precio, adicional, anioFabricacion, eslora, capitan);
        this.camarotes = camarotes;
    }

    @Override
    public Double montoAlquiler() {
        Double total = 0.0;
        if (getAnioFabricacion() > 2020) {
            total = getPrecio()+getAdicional();
        } else if (getAnioFabricacion() <= 2020) {
            total = getPrecio();
        }
        return total;
    }

    @Override
    public int compareTo(Yate otroYate) {
        if (this.camarotes>otroYate.camarotes){
            return 1;
        }else if (this.camarotes<otroYate.camarotes){
            return -1;
        }else return 0;
    }
}

