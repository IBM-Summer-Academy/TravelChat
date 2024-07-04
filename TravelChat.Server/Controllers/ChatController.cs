using Microsoft.AspNetCore.Mvc;

namespace TravelChat.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : Controller
    {
        public ChatController(ILogger<ChatController> logger)
        {
            _logger = logger;
        }

        [HttpPost(nameof(SendMessage))]
        public IActionResult SendMessage([FromBody] string message)
        {
            _logger.LogInformation("User sent message: {0}", message);
            return Json(new { response = "Test response" });
        }

        [HttpPost(nameof(RateResult))]
        public IActionResult RateResult([FromQuery] byte rating)
        {
            _logger.LogInformation("User rated response with: {0}", rating);
            return Ok();
        }

        private ILogger<ChatController> _logger;
    }
}