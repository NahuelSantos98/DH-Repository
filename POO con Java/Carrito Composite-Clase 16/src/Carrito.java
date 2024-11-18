import java.util.ArrayList;
import java.util.List;

public class Carrito {
   private List <Comprable> comprableList;

    public Carrito() {
        comprableList = new ArrayList<>();
    }

    public Double calcularPrecioTotal(){
        Double precioBruto=0.0;
        for (Comprable comprable: comprableList) {
            precioBruto+= comprable.calcularPrecio();
        }
        return precioBruto;
    };

    public void agregarComprable(Comprable comprable){
        comprableList.add(comprable);
    }

}
