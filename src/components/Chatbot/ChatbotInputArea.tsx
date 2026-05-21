import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatbotInputAreaProps {
  onSubmit: (text: string) => void;
  isTyping: boolean;
}

export const ChatbotInputArea: React.FC<ChatbotInputAreaProps> = ({
  onSubmit,
  isTyping,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isTyping) return;

    onSubmit(text);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1.5 p-2.5 border-t border-zinc-100 bg-white">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
        disabled={isTyping}
        className="flex-1 px-3 py-1.5 border border-zinc-200 rounded-lg text-[12px] text-zinc-800 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-60 font-matter"
      />
      <button
        type="submit"
        disabled={!inputValue.trim() || isTyping}
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:hover:bg-blue-600 disabled:scale-100"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
};
