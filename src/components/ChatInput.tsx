import { useState, useRef, useEffect } from "react";
import { Send, Plus, ImageIcon } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxChars = 800;

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSend(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [message]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-secondary rounded-2xl border border-border px-4 py-3">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= maxChars) setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Envie uma mensagem para LÛMENIA..."
          className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none outline-none text-sm min-h-[24px] max-h-[120px]"
          rows={1}
          disabled={isLoading}
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {message.length}/{maxChars}
            </span>
            <button
              onClick={handleSend}
              disabled={!message.trim() || isLoading}
              className="text-muted-foreground hover:text-primary disabled:opacity-30 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
