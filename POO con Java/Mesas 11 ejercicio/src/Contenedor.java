import java.util.Collections;
public class Contenedor implements Comparable<Contenedor>{
    private Integer identificador;
    private String pais;
    private Boolean materialPeligroso;

    public Contenedor(Integer identificador, String pais, Boolean materialPeligroso) {
        this.identificador = identificador;
        this.pais = pais;
        this.materialPeligroso = materialPeligroso;
    }


    @Override
    public int compareTo(Contenedor o) {
        return 0;
    }
}
