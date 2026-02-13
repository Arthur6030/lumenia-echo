import { Sparkles } from "lucide-react";
import lumeniaLogo from "@/assets/lumenia-logo.png";

const ChatGreeting = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia!";
    if (hour < 18) return "Boa tarde!";
    return "Boa noite!";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={lumeniaLogo} alt="LÛMENIA" className="w-16 h-16" />
      <div className="flex items-center gap-2 text-muted-foreground">
        <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
        <span className="text-sm">{getGreeting()}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
        Por onde começamos?
      </h1>
    </div>
  );
};

export default ChatGreeting;
