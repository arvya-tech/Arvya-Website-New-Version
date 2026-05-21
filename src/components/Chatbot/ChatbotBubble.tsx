import React from "react";
import { MessageSquare } from "lucide-react";

interface ChatbotBubbleProps {
  onClick: () => void;
}

export const ChatbotBubble: React.FC<ChatbotBubbleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-zinc-950 to-zinc-800 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-zinc-700/50 relative group"
      title="Chat with Arvya Assistant"
    >
      <MessageSquare className="h-5 w-5 text-white group-hover:rotate-3 transition-transform duration-300" />
      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
      </span>
    </button>
  );
};
