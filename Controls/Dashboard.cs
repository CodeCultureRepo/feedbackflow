using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

[Authorize]
public class DashboardController : Controller
{
    public IActionResult Index()
    {
        // Fetch survey responses from the database
        // Your database logic here

        return View();
    }
}
