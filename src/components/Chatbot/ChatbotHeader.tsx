import React from "react";
import { Mail, X } from "lucide-react";

interface ChatbotHeaderProps {
  onClose: () => void;
  onOpenForm: () => void;
}

export const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({
  onClose,
  onOpenForm,
}) => {
  return (
    <div className="flex items-center justify-between bg-zinc-950 px-4 py-3 text-white">
      <div className="flex items-center gap-2">
        <img
          src="/Arvya_Logo.png"
          alt="Arvya"
          className="h-5 w-5 rounded-md bg-white p-0.5 object-contain"
        />
        <div>
          <h3 className="font-season_mix text-[13.5px] font-semibold tracking-wide leading-none">
            Arvya Assistant
          </h3>
          <span className="text-[9.5px] text-zinc-400 font-matter flex items-center gap-1 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Online
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Manual Enquiry Envelope Button */}
        <button
          onClick={onOpenForm}
          className="p-1 text-zinc-400 hover:text-white hover:scale-105 active:scale-95 transition-all"
          title="Send Enquiry Form"
        >
          <Mail className="h-3.5 w-3.5" />
        </button>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-1 text-zinc-400 hover:text-white hover:scale-105 active:scale-95 transition-all"
          title="Close Chat"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
