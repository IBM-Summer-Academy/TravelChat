using Microsoft.AspNetCore.Mvc;

namespace TravelChat.Server.Controllers
{
    public class ChatService
    {
        public ChatPrompt Parse([FromBody] ChatPrompt chatPrompt)
        {
            if(chatPrompt.Content.Trim().Length == 0)
            {
                throw new ArgumentNullException("Provided prompt cannot be empty");
            }

            return chatPrompt;
        }

        public ChatResponse GetResponse(ChatPrompt prompt)
        {
            return new ChatResponse
            {
                Response = "Here are the recommended destinations for you!",
                Tokens = new string[]
                    {
                        "Greece", "Austria", "Hawaii"
                    }
            };
        }
    }
}
