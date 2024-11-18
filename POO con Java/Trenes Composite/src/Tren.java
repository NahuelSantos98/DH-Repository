import java.util.ArrayList;
import java.util.List;

public class Tren {
    private List<Calculable> calculableList;

    public Tren (){
        calculableList= new ArrayList<>();
    }

    public Double calcularTotal (){
       Double areaTotal=0.0;
        for (Calculable calculable:calculableList) {
            areaTotal+=calculable.calcularArea();
        }
       return areaTotal;
    }
}
