import ReactMarkdown from "react-markdown";
import { Sparkles, User } from "lucide-react";
import lumeniaLogo from "@/assets/lumenia-logo.png";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {messages.map((msg, i) => (
        <div key={i} className="flex gap-3">
          {msg.role === "assistant" ? (
            <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
              <img src={lumeniaLogo} alt="AI" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">
              {msg.role === "assistant" ? "LÛMENIA" : "Você"}
            </p>
            <div className="text-sm text-foreground prose prose-invert prose-sm max-w-none">
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
      {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
            <img src={lumeniaLogo} alt="AI" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-1 pt-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
