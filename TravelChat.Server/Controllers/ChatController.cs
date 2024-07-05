using Microsoft.AspNetCore.Mvc;

namespace TravelChat.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : Controller
    {
        public ChatController(ILogger<ChatController> logger, ChatService chatService)
        {
            _logger = logger;
            _chatService = chatService;
        }

        [HttpPost(nameof(SendMessage))]
        public IActionResult SendMessage([FromBody] string message)
        {
            try
            {
                var response = _chatService.Message(message);
                _logger.LogInformation(response);
                return Json(new { response });
            }
            catch (InvalidOperationException) 
            {
                return NotFound();
            }
        }

        [HttpPost(nameof(RateResult))]
        public IActionResult RateResult([FromQuery] byte rating)
        {
            return Ok();
        }

        private readonly ILogger<ChatController> _logger;
        private readonly ChatService _chatService;
    }
}