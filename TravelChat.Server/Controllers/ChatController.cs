using Microsoft.AspNetCore.Mvc;

namespace TravelChat.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private ChatService chatService;

        public ChatController()
        {
            chatService = new ChatService();
        }

        [HttpPost]
        public ActionResult<ChatResponse> Post([FromBody] ChatPrompt chatPrompt)
        {
            ChatPrompt prompt;

            try
            {
                prompt = chatService.Parse(chatPrompt);
                Console.WriteLine(prompt);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest();
            }

            ChatResponse response = chatService.GetResponse(chatPrompt);
            Console.WriteLine(response);

            return Ok(response);
        }
    }
}
