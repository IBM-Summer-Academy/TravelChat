using Microsoft.AspNetCore.Mvc;
using TravelChat.Server.Models;

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

        /// <summary>
        /// Creates a new chat session
        /// </summary>
        /// <returns>The id to new session</returns>
        /// <response code="201">Returns the new session id</response>
        /// <response code="500">Returns a message saying what went wrong</response>
        [HttpPost(nameof(CreateSession))]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateSession() 
        {
            try
            {
                var sessionId = _chatService.CreateSession();
                return StatusCode(StatusCodes.Status201Created, new { sessionId });
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Couldn't create a chat session" });
            }
        }


        [HttpPost(nameof(SendMessage))]
        public IActionResult SendMessage([FromBody]ChatMessage message)
        {
            try
            {
                var response = _chatService.Message(message.Content, message.SessionId);
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