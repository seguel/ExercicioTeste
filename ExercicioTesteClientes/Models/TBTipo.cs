namespace ExercicioTesteClientes.Models
{
    public class TBTipo
    {
        public int ID_Tipo { get; set; }
        public string? Tipo { get; set; }

        public List<TBClientes>? Clientes { get; set; }
    }
}
