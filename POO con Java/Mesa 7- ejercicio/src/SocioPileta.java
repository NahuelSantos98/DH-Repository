public class SocioPileta extends Socio {
    private Double costoPileta;
    private Boolean estaHabilitado;

    public SocioPileta (Integer numeroSocio, String nombre, String actividad, Double cuota,Double costoPileta, Boolean estaHabilitado) {
        super(numeroSocio,nombre,actividad,cuota);
        this.costoPileta=costoPileta;
        this.estaHabilitado=estaHabilitado;
    }

    @Override
    public Double calcularCostoMensual() {
        if (estaHabilitado) {
            return super.calcularCostoMensual() + costoPileta;
        }else {
            return super.calcularCostoMensual();
        }
    }
    }

