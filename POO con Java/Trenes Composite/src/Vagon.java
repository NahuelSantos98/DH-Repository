import java.util.ArrayList;
import java.util.List;

public class Vagon implements Calculable{
    private List<Calculable> calculableList;

    public Vagon (){
        calculableList= new ArrayList<>();
    }

    public void agregarFromas(Calculable calculable){
       calculableList.add(calculable);
   }
    @Override
    public Double calcularArea() {
       Double areaTotal=0.0;
        for (Calculable calculable:calculableList) {
            areaTotal+=calculable.calcularArea();
        }
        return areaTotal;
    }
}
