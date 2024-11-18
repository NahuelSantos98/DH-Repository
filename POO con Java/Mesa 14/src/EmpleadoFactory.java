public class EmpleadoFactory {
    private static EmpleadoFactory instance = new EmpleadoFactory();

    private EmpleadoFactory(){

    }

    public static EmpleadoFactory getInstance(){
        return instance;
    }

    public Empleado crearEmpleado(String codigo){
        switch (codigo){
            case "EMP-RD":
                return new EmpleadoRelacionDependencia(1000.0);
            case "EMP-PH":
                return new EmpleadoContratado(7.0,0.14);
        }
        return null;
    }



}

