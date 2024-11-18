import java.util.ArrayList;

public class Empresa {
    private ArrayList<Empleado> empleados;

    public Empresa(){
        empleados = new ArrayList<>();
    }



    public double calcularSueldoTotal(int dias){
        double total = 0;
        for(Empleado emp: empleados)
            total+=emp.calcularSueldo(dias);

        return total;
    }
}
