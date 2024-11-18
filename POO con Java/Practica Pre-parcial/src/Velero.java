public class Velero extends Embarcacion{
    private Integer mastiles;

    public Velero(Double precio, Double adicional, Integer anioFabricacion, Integer eslora, Capitan capitan, Integer mastiles) {
        super(precio, adicional, anioFabricacion, eslora, capitan);
        this.mastiles=mastiles;
    }

    @Override
    public Double montoAlquiler() {
        Double total = 0.0;
        if (getAnioFabricacion()>2020){
            total= getPrecio()+getAdicional();
        } else if (getAnioFabricacion()<=2020) {
            total = getPrecio();
        }
        return total;
    }


    public Boolean esGrande (){
        if (mastiles>=4){
            return true;
        } else return false;
    }
}
