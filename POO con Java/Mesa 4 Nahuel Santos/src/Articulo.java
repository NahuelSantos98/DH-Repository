public class Articulo {
   //ATRIBUTOS
    private String descripcion;
    private double precioVenta;
    private int stock;

    //CONSTRUCTOR
    public Articulo(String descripcion, int cantidad, double precio){
            this.descripcion = descripcion; //Para diferenciar se utiliza el this.
            precioVenta=precio;
            stock = cantidad;
    }

    //ARTICULOS
            public boolean hayStock(){
                return stock>0;
            }
            public double consultarPrecio(){
                return precioVenta;
            }

    //METODO GET
    public String getDescripcion(){
        return descripcion;
    }

    public double getPrecioVenta(){
        return precioVenta;
    }
    public int getstock(){
        return stock;
    }

    //METODO SET
    public void setDescripcion(String descripcion){
    this.descripcion=descripcion;}

    public void setPrecioVenta(double precio){
        this.precioVenta=precio;}
    public void setStock(int stock){
        this.stock=stock;}

}
