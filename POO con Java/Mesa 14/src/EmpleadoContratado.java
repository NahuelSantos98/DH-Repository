public class EmpleadoContratado extends Empleado{

    private double importePorHora;
    private double retencion;
    public EmpleadoContratado(double importePorHora, double retencion) {
        this.importePorHora = importePorHora ;
        this.retencion=retencion;
    }

    public double getImportePorHora() {
        return importePorHora;
    }

    public void setImportePorHora(double importePorHora) {
        this.importePorHora = importePorHora;
    }

    @Override
    public double calcularSueldo(int dias) {
        double sueldobruto= importePorHora*dias*8.0;
        double sueldoRetencion=sueldobruto*retencion;
        return sueldobruto-sueldoRetencion;

    }
}
