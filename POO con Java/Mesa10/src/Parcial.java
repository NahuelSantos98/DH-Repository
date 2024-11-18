public class Parcial extends Examen{

    private Integer numeroUnidad;
    private Integer reintentos;

    public Parcial(Alumno alumno, String titulo, String enunciado, Double nota, Integer reintentos, Integer numeroUnidad) {
        super(alumno, titulo, enunciado, nota);
        this.numeroUnidad=numeroUnidad;
        this.reintentos= 0;
    }

    @Override
    public Boolean aprobado() {
        return getNota() >= 4;
    }

    public Boolean esRecuperable (){
        Boolean recuperable =false;
        if (aprobado()){
            recuperable = false;
        }
        if (numeroUnidad<=3 && reintentos<3){
           recuperable = true;
        } else if (numeroUnidad>=3&& reintentos<2) {
            recuperable =true;
        }
        return recuperable;
    }
}
