using Microsoft.AspNetCore.Mvc;
using YourApp.Models;

public class SurveyController : Controller
{
    [HttpPost]
    public IActionResult Submit(SurveyModel model)
    {
        if (ModelState.IsValid)
        {
            // Save survey response to the database
            // Your database logic here

            return RedirectToAction("ThankYou");
        }

        return View(model);
    }

    public IActionResult ThankYou()
    {
        return View();
    }
}
