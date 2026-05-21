import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";

const STORAGE_KEY = "arvya_cookie_consent";

type ConsentState = {
  essential: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Slight delay so banner doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const saveConsent = (consent: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, timestamp: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ essential: true, functional: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ essential: true, functional: false, analytics: false, marketing: false });
  const saveCustom = () => saveConsent(prefs);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop blur on mobile */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[9998] md:hidden" />

      {/* Banner */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-[640px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)]"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)" }}
      >
        {/* Top accent */}
        <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />

        <div className="p-5 md:p-6">
          {/* Header row */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Cookie className="w-4.5 h-4.5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="font-season_mix font-[420] text-stone-900 text-[1.05rem] leading-snug">
                We value your privacy
              </p>
              <p className="font-matter text-stone-500 text-[13.5px] leading-[1.65] mt-1">
                We use cookies to enhance your browsing experience and analyse site traffic. Essential cookies are always active.{" "}
                <Link to="/cookies-policy" className="text-indigo-600 hover:underline" onClick={() => setVisible(false)}>
                  Learn more
                </Link>
              </p>
            </div>
            {/* Close (reject all) */}
            <button
              onClick={rejectAll}
              className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-zinc-100 transition-colors"
              aria-label="Reject all cookies"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Expandable preferences */}
          {showDetails && (
            <div className="mt-3 mb-4 space-y-2 border border-zinc-200 rounded-xl p-4">
              {[
                { key: "essential", label: "Essential", desc: "Required for the website to function. Cannot be disabled.", locked: true },
                { key: "functional", label: "Functional", desc: "Remember your preferences and settings across visits.", locked: false },
                { key: "analytics", label: "Analytics", desc: "Help us understand how visitors use our site (anonymised).", locked: false },
                { key: "marketing", label: "Marketing", desc: "Used to show relevant ads across networks.", locked: false },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between gap-3 py-1.5">
                  <div>
                    <p className="font-matter text-stone-800 text-[13.5px] font-medium">{item.label}</p>
                    <p className="font-matter text-stone-400 text-[12px]">{item.desc}</p>
                  </div>
                  {item.locked ? (
                    <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full font-matter shrink-0">Always on</span>
                  ) : (
                    <button
                      role="switch"
                      aria-checked={prefs[item.key as keyof ConsentState]}
                      onClick={() => setPrefs((p) => ({ ...p, [item.key]: !p[item.key as keyof ConsentState] }))}
                      className={`relative w-10 h-5.5 shrink-0 rounded-full transition-colors duration-200 ${prefs[item.key as keyof ConsentState] ? "bg-indigo-600" : "bg-zinc-300"}`}
                      style={{ minWidth: 40, height: 22 }}
                    >
                      <span
                        className="absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-200"
                        style={{ transform: prefs[item.key as keyof ConsentState] ? "translateX(18px)" : "translateX(0)" }}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {/* Accept All */}
            <button
              onClick={acceptAll}
              className="flex-1 md:flex-none px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold rounded-xl transition-colors duration-150 font-matter"
            >
              Accept All
            </button>

            {/* Save Custom (only when expanded) */}
            {showDetails && (
              <button
                onClick={saveCustom}
                className="flex-1 md:flex-none px-5 py-2.5 bg-zinc-900 hover:bg-zinc-700 text-white text-[13px] font-semibold rounded-xl transition-colors duration-150 font-matter"
              >
                Save Preferences
              </button>
            )}

            {/* Reject All */}
            <button
              onClick={rejectAll}
              className="flex-1 md:flex-none px-5 py-2.5 border border-zinc-200 hover:bg-zinc-50 text-stone-600 text-[13px] font-semibold rounded-xl transition-colors duration-150 font-matter"
            >
              Reject All
            </button>

            {/* Customise toggle */}
            <button
              onClick={() => setShowDetails((v) => !v)}
              className="flex items-center gap-1.5 text-[12.5px] text-stone-400 hover:text-stone-700 transition-colors font-matter ml-auto"
            >
              {showDetails ? <><ChevronUp className="w-3.5 h-3.5" /> Less</> : <><ChevronDown className="w-3.5 h-3.5" /> Customise</>}
            </button>
          </div>

          {/* Legal links */}
          <div className="flex gap-4 mt-3 pt-3 border-t border-zinc-100">
            <Link to="/privacy-policy" onClick={() => setVisible(false)} className="text-[11.5px] text-stone-400 hover:text-indigo-600 transition-colors font-matter">Privacy Policy</Link>
            <Link to="/cookies-policy" onClick={() => setVisible(false)} className="text-[11.5px] text-stone-400 hover:text-indigo-600 transition-colors font-matter">Cookies Policy</Link>
            <Link to="/terms-of-service" onClick={() => setVisible(false)} className="text-[11.5px] text-stone-400 hover:text-indigo-600 transition-colors font-matter">Terms of Service</Link>
          </div>
        </div>
      </div>
    </>
  );
};
