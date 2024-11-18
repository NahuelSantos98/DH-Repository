public class Main {
    public static void main(String[] args) {
     Circulo circulo=new Circulo(1.0);
     Rectangulo rectanguloSolo=new Rectangulo(5.0,4.0);
     Rectangulo rectangulo = new Rectangulo(6.0, 4.0);
     Rectangulo rectanguloMedio=new Rectangulo(3.0, 2.0);
     Rectangulo rectanguloSuperior=new Rectangulo(3.0, 3.0);
     Triangulo trianguloLocomotora=new Triangulo(2.0, 2.0);


     Vagon ultimoVagon=new Vagon();
     Vagon medioVagon=new Vagon();
     Vagon locomotora=new Vagon();

     ultimoVagon.agregarFromas(rectanguloSolo);
     ultimoVagon.agregarFromas(circulo);
     ultimoVagon.agregarFromas(circulo);
     ultimoVagon.agregarFromas(circulo);

     medioVagon.agregarFromas(rectanguloSolo);
     medioVagon.agregarFromas(circulo);
     medioVagon.agregarFromas(circulo);
     medioVagon.agregarFromas(circulo);

     locomotora.agregarFromas(trianguloLocomotora);
     locomotora.agregarFromas(rectanguloMedio);
     locomotora.agregarFromas(rectanguloSuperior);
     locomotora.agregarFromas(rectangulo);
     locomotora.agregarFromas(circulo);
     locomotora.agregarFromas(circulo);

        System.out.println("Ultimo Vagon: "+ ultimoVagon.calcularArea());
        System.out.println("Vagon del Medio: "+ medioVagon.calcularArea());
        System.out.println("Locomotora: "+locomotora.calcularArea());


    }
}