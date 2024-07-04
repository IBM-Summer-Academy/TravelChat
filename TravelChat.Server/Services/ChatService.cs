using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TravelChat.Server.Models;

namespace TravelChat.Server.Controllers
{
    public class ChatService
    {
        public ChatService(IOptions<WatsonCredentials> watsonCredentials) 
        {
            _watsonCredentials = watsonCredentials.Value;
        }

        private readonly WatsonCredentials _watsonCredentials;
    }
}
