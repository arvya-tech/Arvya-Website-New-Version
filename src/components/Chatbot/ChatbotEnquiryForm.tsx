import React, { useState, useEffect } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { CapturedDetails } from "./types";
import { CHATBOT_CONFIG } from "./config";

interface ChatbotEnquiryFormProps {
  capturedDetails: CapturedDetails;
  onSuccess: () => void;
}

export const ChatbotEnquiryForm: React.FC<ChatbotEnquiryFormProps> = ({
  capturedDetails,
  onSuccess,
}) => {
  const [formName, setFormName] = useState(capturedDetails.name);
  const [formEmail, setFormEmail] = useState(capturedDetails.email);
  const [formMessage, setFormMessage] = useState(capturedDetails.message);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync with dynamically captured parent details
  useEffect(() => {
    setFormName(capturedDetails.name);
    setFormEmail(capturedDetails.email);
    setFormMessage(capturedDetails.message);
  }, [capturedDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(CHATBOT_CONFIG.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: formMessage,
        }),
      });

      setIsSubmitting(false);

      if (res.ok) {
        setIsSubmitted(true);
        onSuccess();
      } else {
        throw new Error("Formspree submission failed");
      }
    } catch {
      setIsSubmitting(false);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-3 shadow-sm mt-1.5 flex flex-col gap-2.5 font-matter animate-fade-in">
      <div className="flex items-center gap-1.5 font-bold text-zinc-900 border-b border-zinc-100 pb-1.5 text-[12px]">
        <Mail className="h-3.5 w-3.5 text-blue-600" />
        <span>Send Enquiry to Arvya</span>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-3 text-center">
          <CheckCircle2 className="h-8 w-8 text-emerald-500 mb-1.5 animate-bounce" />
          <p className="text-[12px] font-semibold text-emerald-600">Enquiry Sent Successfully!</p>
          <p className="text-[10.5px] text-zinc-500 mt-0.5 font-normal">Our team will reach out shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-0.5">
            <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Your Name</label>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Enter your name"
              className="px-2.5 py-1.5 border border-zinc-200 bg-zinc-50 rounded-md text-[11px] text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-matter"
              required
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              placeholder="email@example.com"
              className="px-2.5 py-1.5 border border-zinc-200 bg-zinc-50 rounded-md text-[11px] text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-matter"
              required
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Your Message</label>
            <textarea
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="How can we help?"
              rows={3}
              className="px-2.5 py-1.5 border border-zinc-200 bg-zinc-50 rounded-md text-[11px] text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-matter"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-0.5 bg-blue-600 hover:bg-zinc-900 text-white font-semibold py-2 rounded-md text-[11px] shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Submit Enquiry</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
