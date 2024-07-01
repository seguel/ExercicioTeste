using ExercicioTesteClientes.Models;
using Microsoft.EntityFrameworkCore;

namespace ExercicioTesteClientes.Data
{
    public class ExercicioTesteContext : DbContext
    {
        public ExercicioTesteContext (DbContextOptions<ExercicioTesteContext> options)
            : base(options)
        {
        }

        public DbSet<ExercicioTesteClientes.Models.TBClientes> TBClientes { get; set; }
        public DbSet<ExercicioTesteClientes.Models.TBTipo> TBTipo { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TBTipo>()
                .HasKey(t => t.ID_Tipo);

            modelBuilder.Entity<TBClientes>()
                .HasOne(c => c.Tipos)
                .WithMany(c => c.Clientes)
                .HasForeignKey(e => e.ID_Tipo)
                .IsRequired(); 
                
        }
    }
}
