import { useState } from "react";
import { Plus, Video, User, LogIn, Settings } from "lucide-react";
import lumeniaLogoFull from "@/assets/lumenia-logo-full.png";

interface AppSidebarProps {
  onNewChat: () => void;
}

const AppSidebar = ({ onNewChat }: AppSidebarProps) => {
  return (
    <aside className="w-56 flex-shrink-0 bg-sidebar flex flex-col border-r border-sidebar-border h-screen">
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        <img src={lumeniaLogoFull} alt="LÛMENIA" className="h-7" />
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Action buttons */}
      <div className="px-3 flex gap-2">
        <button
          onClick={onNewChat}
          className="flex items-center gap-1.5 text-sm text-sidebar-foreground hover:text-foreground transition-colors px-3 py-2"
        >
          <Plus className="w-4 h-4" />
          Novo Chat
        </button>
        <button className="flex items-center gap-1.5 text-sm bg-primary text-primary-foreground rounded-lg px-3 py-2 hover:opacity-90 transition-opacity">
          <Video className="w-4 h-4" />
          Novo Vídeo
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Visitor mode */}
      <div className="p-4 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-3">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">Modo Visitante</p>
        <p className="text-xs text-muted-foreground mt-1">
          Faça login para salvar seus chats e vídeos gerados.
        </p>
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
          <LogIn className="w-4 h-4" />
          Entrar Agora
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 text-center">
        <p className="text-xs text-muted-foreground">Lûmenia AI © 2024</p>
      </div>
    </aside>
  );
};

export default AppSidebar;
