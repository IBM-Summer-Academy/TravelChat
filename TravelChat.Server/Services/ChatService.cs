using IBM.Cloud.SDK.Core.Authentication.Iam;
using IBM.Watson.Assistant.v2;
using IBM.Watson.Assistant.v2.Model;
using Microsoft.Extensions.Options;
using TravelChat.Server.Models;

namespace TravelChat.Server.Controllers
{
    public class ChatService
    {
        public ChatService(IOptions<WatsonCredentials> watsonCredentials)
        {
            _watsonCredentials = watsonCredentials.Value;
            _authenticator = new IamAuthenticator(apikey: _watsonCredentials.Key);
            _assistantService = new AssistantService("2024-07-05", _authenticator);
            _assistantService.SetServiceUrl(_watsonCredentials.Url);
        }

        public string CreateSession() 
        {
            var sessionresponse = _assistantService.CreateSession(_watsonCredentials.AssistantId);
            return sessionresponse.Result.SessionId;
        }

        // throws invalid operation exception if there was no response generated by the assistant
        public string Message(string content, string sessionId)
        {
            var response = _assistantService.Message(
                _watsonCredentials.AssistantId,
                sessionId,
                input: new MessageInput()
                {
                    MessageType = MessageInput.MessageTypeEnumValue.TEXT,
                    Text = content
                });

            RuntimeResponseGeneric genericResponse = response.Result.Output.Generic.First();
            return genericResponse.Text;
        }

        private readonly WatsonCredentials _watsonCredentials;
        private readonly IamAuthenticator _authenticator;
        private readonly AssistantService _assistantService;
    }
}
