import React, { useState, useEffect } from "react";
import { ChatbotBubble } from "./ChatbotBubble";
import { ChatbotHeader } from "./ChatbotHeader";
import { ChatbotMessageList } from "./ChatbotMessageList";
import { ChatbotInputArea } from "./ChatbotInputArea";
import { ChatMessage, CapturedDetails } from "./types";
import { CHATBOT_CONFIG } from "./config";

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [capturedDetails, setCapturedDetails] = useState<CapturedDetails>({
    name: "",
    email: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Enable/disable page scrolling on hover to prevent background scroll chaining
  const handleMouseEnter = () => {
    document.body.style.overflow = "hidden";
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = "";
  };

  // Cleanup body scroll if chatbot window is closed or component is unmounted
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Initialize Chat Thread with original Welcome text
  useEffect(() => {
    const welcomeMsg: ChatMessage = {
      id: "welcome",
      role: "bot",
      text: "Hi! I'm your Arvya Assistant. How can I help you today? You can ask me questions about our services or click the email icon above to send an enquiry.",
    };
    setMessages([welcomeMsg]);
  }, []);

  // Open Form Manual Override (triggered from header mail icon)
  const handleOpenForm = () => {
    setShowForm(true);
  };

  // Captures Details from model response text
  const checkAndCaptureDetails = (text: string) => {
    const nameMatch = text.match(/Name:\s*([^,\n]*)/i);
    const emailMatch = text.match(/Email:\s*([^,\n]*)/i);
    const messageMatch = text.match(/Message:\s*([^,\n]*)/i);

    let updated = { ...capturedDetails };
    let hasNewData = false;

    if (nameMatch && nameMatch[1].trim()) {
      updated.name = nameMatch[1].trim();
      hasNewData = true;
    }
    if (emailMatch && emailMatch[1].trim()) {
      updated.email = emailMatch[1].trim();
      hasNewData = true;
    }
    if (messageMatch && messageMatch[1].trim()) {
      updated.message = messageMatch[1].trim();
      hasNewData = true;
    }

    if (hasNewData) {
      setCapturedDetails(updated);
      if (updated.name && updated.email && updated.message) {
        // Form trigger automatically if all fields extracted
        setTimeout(() => {
          setShowForm(true);
        }, 600);
      }
    }
  };

  // Dispatch user message to backend /api/chat and stream the SSE response
  const handleSendMessage = async (text: string) => {
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    const botMsgId = `bot-${Date.now()}`;
    let isFirstChunk = true;
    let fullText = "";

    try {
      const res = await fetch(`${CHATBOT_CONFIG.BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, userInput: text }),
      });

      if (!res.ok || !res.body) throw new Error(`Backend ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;

          try {
            const parsed = JSON.parse(data);
            const chunk: string = parsed?.choices?.[0]?.delta?.content ?? "";
            if (!chunk) continue;

            fullText += chunk;

            if (isFirstChunk) {
              isFirstChunk = false;
              setIsTyping(false);
              setMessages((prev) => [...prev, { id: botMsgId, role: "bot", text: chunk }]);
            } else {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMsgId ? { ...msg, text: msg.text + chunk } : msg
                )
              );
            }
          } catch {
            // ignore malformed SSE lines
          }
        }
      }

      checkAndCaptureDetails(fullText);

    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "bot",
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    }
  };

  // Form submission success trigger callback
  const handleFormSuccess = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "bot",
        text: "Thank you! Your enquiry has been submitted successfully via Formspree. Our team will contact you soon.",
      },
    ]);
    // Wipe local captured cache state
    setCapturedDetails({ name: "", email: "", message: "" });
    // Dismiss overlay form window smoothly
    setTimeout(() => {
      setShowForm(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-matter">
      {/* Floating Toggle Bubble */}
      {!isOpen && <ChatbotBubble onClick={() => setIsOpen(true)} />}

      {/* Chat Window */}
      {isOpen && (
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col h-[460px] w-[310px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-zinc-200 overflow-hidden animate-fade-in transition-all duration-300 overscroll-contain"
        >
          
          {/* Header Bar */}
          <ChatbotHeader
            onClose={() => setIsOpen(false)}
            onOpenForm={handleOpenForm}
          />

          {/* Message List Log Thread */}
          <ChatbotMessageList
            messages={messages}
            isTyping={isTyping}
            showForm={showForm}
            capturedDetails={capturedDetails}
            onFormSuccess={handleFormSuccess}
          />

          {/* Text Input Panel */}
          <ChatbotInputArea
            onSubmit={handleSendMessage}
            isTyping={isTyping}
          />

        </div>
      )}
    </div>
  );
};
