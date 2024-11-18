public class Main {
    public static void main(String[] args) {
Usuariojuego miUsuario= new Usuariojuego("Nahuel", "clave123");

miUsuario.setNivel(5);
System.out.println("Tu nivel es: " + miUsuario.getNivel());

miUsuario.setClave("NO HAY CLAVE");
System.out.println("Tu clave es: " + miUsuario.getClave());

miUsuario.setNombre("Miguel");
System.out.println("Tu nombre es: "+miUsuario.getNombre());

miUsuario.setPuntaje(100.0);
System.out.println("Puntaje total: "+miUsuario.getPuntaje());

miUsuario.aumentarPuntaje(200.00);

miUsuario.subirNivel(true);

miUsuario.bonus(500.00);
    }
}