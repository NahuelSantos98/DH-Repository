public class Main{
    public static void main(String[] args) {
        Equipo equipo = new Equipo("BOKE");

        equipo.addJugador(new Jugador(15,"Juan",true,true));
        equipo.addJugador(new Jugador(14,"Fran",false,false));
        equipo.addJugador(new Jugador(4,"Carlos",true,true));
        equipo.addJugador(new Jugador(10,"Elton",true,false));

       // System.out.println(equipo.getCantidadJugadoresLesionados());
        equipo.mostrarJugadoresTitulares();


    }
}