using System.Web.Mvc;

namespace DxExcelDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SpreadsheetPartial()
        {
            return PartialView("_SpreadsheetPartial");
        }

        [HttpPost]
        public ActionResult SpreadsheetCustomAction(string customData)
        {
            return PartialView("_SpreadsheetPartial");
        }
    }
}