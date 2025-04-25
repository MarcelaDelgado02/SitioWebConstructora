using Microsoft.AspNetCore.Mvc;

namespace SitioWebConstructora.Controllers
{
    public class InfoController : Controller
    {
        public IActionResult Info()
        {
            return View();
        }
    }
}
