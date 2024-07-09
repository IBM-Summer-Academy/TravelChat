namespace TravelChat.Server.Models
{
    public class ChatMessage
    {
        public string SessionId { get; init; } = null!;
        public string Content { get; init; } = null!;
    }
}
