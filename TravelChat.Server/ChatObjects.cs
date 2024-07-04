namespace TravelChat.Server.Controllers
{
    public class ChatPrompt
    {
        public ulong Id { get; set; }
        public string Content { get; set; }

        public override string ToString()
        {
            return $"Id: {this.Id}; Conent: {this.Content}";
        }
    }

    public class ChatResponse
    {
        public string Response { get; set; }
        public string[] Tokens { get; set; }

        public override string ToString()
        {
            return $"Response: {this.Response}; Tokens: [{string.Join(", ", this.Tokens)}]";
        }
    }
}