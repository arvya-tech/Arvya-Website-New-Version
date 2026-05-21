import React, { useEffect, useRef } from "react";
import { ChatMessage, CapturedDetails } from "./types";
import { ChatbotEnquiryForm } from "./ChatbotEnquiryForm";

interface ChatbotMessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
  showForm: boolean;
  capturedDetails: CapturedDetails;
  onFormSuccess: () => void;
}

export const ChatbotMessageList: React.FC<ChatbotMessageListProps> = ({
  messages,
  isTyping,
  showForm,
  capturedDetails,
  onFormSuccess,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showForm]);

  // Trap scroll wheel boundaries to fully block scroll chaining on background page
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const delta = e.deltaY;

      // Boundary checks (includes a 1px buffer to account for high-DPI scaling and fractional zoom levels)
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1.5;

      if (delta < 0 && isAtTop) {
        // Prevent scroll up when already at top
        e.preventDefault();
      } else if (delta > 0 && isAtBottom) {
        // Prevent scroll down when already at bottom
        e.preventDefault();
      }
    };

    // Attach wheel event with passive: false to allow e.preventDefault() to execute
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Robust client-side markdown compiler (supports code blocks, lists, headings, and bold/italic tags)
  const renderMarkdown = (text: string) => {
    // 1. Escaping basic HTML to prevent injection issues
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 2. Multi-line Code blocks: ```code```
    html = html.replace(/```([\s\S]*?)```/g, (_, codeContent) => {
      return `<pre class="bg-zinc-100 text-zinc-800 p-2 my-2 rounded-lg font-mono text-xs overflow-x-auto border border-zinc-200 select-all leading-normal whitespace-pre">${codeContent.trim()}</pre>`;
    });

    // 3. Inline code: `code`
    html = html.replace(/`([^`]+)`/g, '<code class="bg-zinc-100 text-pink-600 px-1 py-0.5 rounded font-mono text-xs border border-zinc-200">$1</code>');

    // 4. Bold blocks: **text**
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 5. Italic blocks: *text*
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // 6. Headers: #, ##, ###
    html = html.replace(/^### (.*$)/gim, '<h4 class="text-xs font-bold text-zinc-950 mt-3 mb-1 font-season_mix">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 class="text-sm font-bold text-zinc-950 mt-4 mb-1.5 font-season_mix">$1</h3>');
    html = html.replace(/^# (.*$)/gim, '<h2 class="text-base font-bold text-zinc-950 mt-4 mb-2 font-season_mix">$1</h2>');

    // 7. Blockquotes: > Quote
    html = html.replace(/^\s*>\s+(.*$)/gim, '<blockquote class="border-l-3 border-blue-500 pl-2.5 py-0.5 text-zinc-500 italic my-1.5 bg-zinc-100/50 rounded-r text-[13px]">$1</blockquote>');

    // 8. Modular lists compiler (line by line mapping to support both unordered lists and ordered numbered lists)
    const lines = html.split("\n");
    let inUnorderedList = false;
    let inOrderedList = false;
    const compiledLines: string[] = [];

    for (let line of lines) {
      const trimmed = line.trim();

      // Unordered lists matches "- " or "* "
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (inOrderedList) {
          compiledLines.push("</ol>");
          inOrderedList = false;
        }
        if (!inUnorderedList) {
          compiledLines.push('<ul class="list-disc pl-4.5 my-1.5 flex flex-col gap-1">');
          inUnorderedList = true;
        }
        compiledLines.push(`<li>${trimmed.substring(2)}</li>`);
      }
      // Ordered numbered lists matches "1. " "2. " etc
      else if (/^\d+\.\s+/.test(trimmed)) {
        if (inUnorderedList) {
          compiledLines.push("</ul>");
          inUnorderedList = false;
        }
        if (!inOrderedList) {
          compiledLines.push('<ol class="list-decimal pl-4.5 my-1.5 flex flex-col gap-1">');
          inOrderedList = true;
        }
        const parsedContent = trimmed.replace(/^\d+\.\s+/, "");
        compiledLines.push(`<li>${parsedContent}</li>`);
      }
      // Normal paragraph line
      else {
        if (inUnorderedList) {
          compiledLines.push("</ul>");
          inUnorderedList = false;
        }
        if (inOrderedList) {
          compiledLines.push("</ol>");
          inOrderedList = false;
        }
        compiledLines.push(line);
      }
    }

    // Close any lists remaining open
    if (inUnorderedList) compiledLines.push("</ul>");
    if (inOrderedList) compiledLines.push("</ol>");

    html = compiledLines.join("\n");

    // 9. Standard newlines to break tags
    html = html.replace(/\n/g, "<br>");

    return { __html: html };
  };

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto p-3 bg-zinc-50 flex flex-col gap-2.5 chatbot-messages-container relative"
    >
      {/* Custom Sleek Scrollbar Stylesheet injection */}
      <style>{`
        .chatbot-messages-container {
          overscroll-behavior: contain;
        }
        .chatbot-messages-container::-webkit-scrollbar {
          width: 5px;
        }
        .chatbot-messages-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .chatbot-messages-container::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 9999px;
        }
        .chatbot-messages-container::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
        /* Custom basic markdown rendering visual designs */
        .chatbot-messages-container strong {
          color: #09090b;
          font-weight: 700;
        }
        .chatbot-messages-container em {
          color: #27272a;
          font-style: italic;
        }
        .chatbot-messages-container ul {
          list-style-type: disc;
          padding-left: 1.15rem;
          margin: 0.35rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .chatbot-messages-container ol {
          list-style-type: decimal;
          padding-left: 1.15rem;
          margin: 0.35rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .chatbot-messages-container li {
          line-height: 1.35;
          margin-bottom: 0.05rem;
        }
        .chatbot-messages-container code {
          background-color: #f4f4f5;
          color: #db2777;
          padding: 0.05rem 0.25rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.85em;
          border: 1px solid #e4e4e7;
        }
        .chatbot-messages-container pre {
          background-color: #f4f4f5;
          color: #18181b;
          padding: 0.4rem;
          border-radius: 0.375rem;
          font-family: monospace;
          font-size: 0.85em;
          border: 1px solid #e4e4e7;
          overflow-x: auto;
          margin: 0.4rem 0;
        }
        .chatbot-messages-container h4 {
          font-size: 12px;
          font-weight: 700;
          color: #09090b;
          margin-top: 0.5rem;
          margin-bottom: 0.15rem;
        }
        .chatbot-messages-container h3 {
          font-size: 12.5px;
          font-weight: 700;
          color: #09090b;
          margin-top: 0.65rem;
          margin-bottom: 0.25rem;
        }
        .chatbot-messages-container blockquote {
          border-left: 3px solid #3b82f6;
          padding-left: 0.5rem;
          color: #71717a;
          font-style: italic;
          margin: 0.35rem 0;
          background-color: rgba(244, 244, 245, 0.5);
          border-top-right-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
        }
      `}</style>

      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-[88%] rounded-xl px-3 py-2 text-[12px] leading-snug ${
            msg.role === "user"
              ? "self-end bg-blue-600 text-white rounded-tr-none font-matter"
              : "self-start bg-white text-zinc-800 border border-zinc-200 shadow-sm rounded-tl-none font-matter"
          }`}
        >
          <div
            className="prose prose-sm break-words max-w-none text-inherit font-matter text-[12px]"
            dangerouslySetInnerHTML={renderMarkdown(msg.text)}
          />
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="self-start bg-white border border-zinc-200 rounded-xl rounded-tl-none px-3 py-2 flex gap-1 items-center shadow-sm">
          <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:0ms]"></span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:150ms]"></span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:300ms]"></span>
        </div>
      )}

      {/* Embedded Enquiry Form */}
      {showForm && (
        <ChatbotEnquiryForm
          capturedDetails={capturedDetails}
          onSuccess={onFormSuccess}
        />
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};
