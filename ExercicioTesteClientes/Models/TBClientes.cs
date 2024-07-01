using System.ComponentModel.DataAnnotations;

namespace ExercicioTesteClientes.Models
{
    public class TBClientes
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome obrigatório")] 
        public string Nome { get; set; }

        [Required(ErrorMessage = "Tipo obrigatório")]
        public int ID_Tipo { get; set; }

        [Required(ErrorMessage = "Documento obrigatório")]
        public string Documento { get; set; }

        [Required(ErrorMessage = "Telefone obrigatório")]
        public string Telefone { get; set; }

        public int IsDeleted { get; set; }
        [DataType(DataType.Date)]
        public DateTime? Data_Exclusao { get; set; }

        public virtual TBTipo? Tipos { get; } = null!;
        
    }
}
