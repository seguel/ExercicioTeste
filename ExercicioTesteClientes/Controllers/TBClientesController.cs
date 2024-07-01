using ExercicioTesteClientes.Data;
using ExercicioTesteClientes.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using ExercicioTesteClientes.Util;

namespace ExercicioTesteClientes.Controllers
{
    public class TBClientesController : Controller
    {
        private readonly ExercicioTesteContext _context;

        public TBClientesController(ExercicioTesteContext context)
        {
            _context = context;
        }

        // GET: TBClientes
        public async Task<IActionResult> Index()
        {
            return _context.TBClientes != null ?
                        View(await _context.TBClientes.Include(c => c.Tipos).Where(c => c.IsDeleted == 0).ToListAsync()) :
                        Problem("Entity set 'ExercicioTesteContext.TBClientes'  is null.");
        }

        // GET: TBClientes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.TBClientes == null)
            {
                return NotFound();
            }

            var tBClientes = await _context.TBClientes.Include(c => c.Tipos)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (tBClientes == null)
            {
                return NotFound();
            }

            //if (tBClientes.ID_Tipo == 1) //CPF
            //    tBClientes.Documento = Helper.FormatCPF(tBClientes.Documento);
            //else if(tBClientes.ID_Tipo == 2) //CNPJ
            //    tBClientes.Documento = Helper.FormatCNPJ(tBClientes.Documento);

            return View(tBClientes);
        }

        // GET: TBClientes/Create
        public IActionResult Create()
        {
            PopularTipoDropDownList(1);
            return View();
        }

        // POST: TBClientes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(int cboId, string hdnDocumento, [Bind("Id,Nome,ID_Tipo,Documento,Telefone,IsDeleted,Data_Exclusao")] TBClientes tBClientes)
        {
            tBClientes.ID_Tipo = cboId;
            tBClientes.Documento = hdnDocumento;

            if (ModelState.IsValid)
            {
                _context.Add(tBClientes);
                await _context.SaveChangesAsync();
                
            }
            return RedirectToAction(nameof(Index));
        }

        //// GET: TBClientes/Edit/5
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if (id == null || _context.TBClientes == null)
        //    {
        //        return NotFound();
        //    }

        //    var tBClientes = await _context.TBClientes.FindAsync(id);
        //    if (tBClientes == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(tBClientes);
        //}

        //// POST: TBClientes/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("Id,Nome,ID_Tipo,Documento,Telefone,IsDeleted,Data_Exclusao")] TBClientes tBClientes)
        //{
        //    if (id != tBClientes.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(tBClientes);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!TBClientesExists(tBClientes.Id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(tBClientes);
        //}

        // GET: TBClientes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.TBClientes == null)
            {
                return NotFound();
            }

            var tBClientes = await _context.TBClientes.Include(c => c.Tipos)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (tBClientes == null)
            {
                return NotFound();
            }

            //if (tBClientes.ID_Tipo == 1) //CPF
            //    tBClientes.Documento = Helper.FormatCPF(tBClientes.Documento);
            //else if (tBClientes.ID_Tipo == 2) //CNPJ
            //    tBClientes.Documento = Helper.FormatCNPJ(tBClientes.Documento);

            return View(tBClientes);
        }

        // POST: TBClientes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.TBClientes == null)
            {
                return Problem("Entity set 'ExercicioTesteContext.TBClientes'  is null.");
            }
            var tBClientes = await _context.TBClientes.FindAsync(id);
            if (tBClientes != null)
            {
                //_context.TBClientes.Remove(tBClientes);
                tBClientes.IsDeleted = 1;
                tBClientes.Data_Exclusao = DateTime.Now;
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TBClientesExists(int id)
        {
            return (_context.TBClientes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        private void PopularTipoDropDownList(int? TipoSelecionado) {
            var ListaTipo = from t in _context.TBTipo select t;

            ViewBag.TipoID = new SelectList(ListaTipo, "ID_Tipo", "Tipo", TipoSelecionado);
        }
    }
}
