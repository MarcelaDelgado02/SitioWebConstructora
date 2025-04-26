using Microsoft.AspNetCore.Mvc;

namespace SitioWebConstructora.Controllers
{
    public class ContactosController : Controller
    {
        public IActionResult Contactos()
        {
            return View();
        }
    }
}
