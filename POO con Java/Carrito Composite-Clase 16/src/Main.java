import java.security.Permission;

public class Main {
    public static void main(String[] args) {
    Producto hamburguesa=new Producto("Hamburguesa", 2000.0);
    Producto papasFritas= new Producto("Papas Fritas", 600.0);
    Producto gaseosa=new Producto("Gaseosa", 700.0);
    Producto helado=new Producto("DDL", 1200.0);
Carrito carrito= new Carrito();


    Combo combo1 = new Combo(0.10);
    combo1.agregarComprable(gaseosa);
        combo1.agregarComprable(papasFritas);
        combo1.agregarComprable(hamburguesa);


        Combo pareja = new Combo(0.15);
        pareja.agregarComprable(combo1);
        pareja.agregarComprable(combo1);


      Combo comboFlia = new Combo(0.20);
      comboFlia.agregarComprable(pareja);
      comboFlia.agregarComprable(pareja);
      comboFlia.agregarComprable(combo1);
      comboFlia.agregarComprable(gaseosa);
      comboFlia.agregarComprable(gaseosa);
      comboFlia.agregarComprable(helado);


      carrito.agregarComprable(combo1);
      carrito.agregarComprable(pareja);
      carrito.agregarComprable(comboFlia);
      carrito.agregarComprable(helado);
      carrito.agregarComprable(helado);
      carrito.agregarComprable(helado);


        System.out.println(carrito.calcularPrecioTotal());
    }
}