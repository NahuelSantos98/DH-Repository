public class Usuariojuego {
    private String nombre;
    private String clave;
    private Double puntaje;
    private int nivel;

    public Usuariojuego (String nombre, String clave){
        this.nombre=nombre;
        this.clave=clave;
    }

    public String getNombre(){
        return nombre;
    }
    public String getClave(){
        return clave;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNombre(String nombre){
        this.nombre=nombre;
    }

    public void setClave(String clave) {
        this.clave=clave;
    }
    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public Double aumentarPuntaje(Double puntajeConseguido){
        puntaje += puntajeConseguido;
        System.out.println("Puntaje total sumado: "+puntaje);
        return puntaje;
    }

    public int subirNivel(Boolean paso){
        if (paso == true){
            nivel++;
            System.out.println(nivel);
            return nivel;
        }else {
            System.out.println(nivel);
            return nivel;
        }
    }

    public Double bonus (Double valor){
        if (valor>0){
            puntaje +=valor;
            System.out.println("Tu puntaje sumado con el bonus es: "+puntaje);
        }
        return puntaje;
    }
}