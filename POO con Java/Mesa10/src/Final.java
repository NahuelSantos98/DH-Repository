public class Final extends Examen implements Comparable<Final>{
    private Double notaOral;
    private Double descripcionTema;

    public Final(Alumno alumno, String titulo, String enunciado, Double nota, Double descripcionTema, Double notaOral) {
        super(alumno, titulo, enunciado, nota);
        this.notaOral=notaOral;
        this.descripcionTema=descripcionTema;
    }
    @Override
    public Boolean aprobado() {
        return getNota()>=4&&notaOral>=4;
    }

public Double promedio(){
        return (getNota()+notaOral)/2;
}

    @Override
    public int compareTo(Final otroFinal) {
        if(this.promedio()>otroFinal.promedio()){
            return 1;
        }else if (this.promedio()< otroFinal.promedio()){
            return -1;
        }else return 0;
    }
}
