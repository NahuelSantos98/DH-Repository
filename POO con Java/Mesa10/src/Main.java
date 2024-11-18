public class Main {
    public static void main(String[] args) {
        Alumno alumno = new Alumno("Nahuel", "Santos", 12345);
        Final finalAlgebra = new Final(alumno, "Algebra", "enunciado1", 7.0, 2.0, 7.0);
        Final finalProgram = new Final( alumno,"program", "enunciado2", 6.0, 3.0, 8.0);
        System.out.println(finalAlgebra.promedio());
        System.out.println(finalProgram.promedio());
        System.out.println(finalAlgebra.aprobado());
        System.out.println(finalProgram.aprobado());
        System.out.println(finalProgram.compareTo(finalAlgebra));

    }
}