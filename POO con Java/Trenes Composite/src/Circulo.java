public class Circulo implements Calculable{
    private Double radio;
    private Double  pi = 3.14 ;

    public Circulo(Double radio) {
        this.radio = radio;
    }


    @Override
    public Double calcularArea() {
        return radio*pi*radio;
    }
}
