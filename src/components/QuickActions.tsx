import { ImageIcon, Video, Lightbulb, Code } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const actions = [
  { label: "Criar uma imagem", icon: ImageIcon, color: "bg-lumenia-teal/15 text-lumenia-teal border-lumenia-teal/30" },
  { label: "Gerar um vídeo", icon: Video, color: "bg-lumenia-blue/15 text-lumenia-blue border-lumenia-blue/30" },
  { label: "Me ajude a pensar", icon: Lightbulb, color: "bg-lumenia-orange/15 text-lumenia-orange border-lumenia-orange/30" },
  { label: "Escrever código", icon: Code, color: "bg-lumenia-green/15 text-lumenia-green border-lumenia-green/30" },
];

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onAction(action.label)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all hover:scale-105 ${action.color}`}
        >
          <action.icon className="w-4 h-4" />
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
