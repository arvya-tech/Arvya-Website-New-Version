import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!ref.current) return;
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in-el",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Work Email, and Requirement Details).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mjgepnop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          details: "",
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
        }
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Failed to send request. Please check your internet connection and try again.");
      setStatus("error");
    }
  };

  return (
    <main ref={ref} className="relative bg-zinc-50 flex flex-col grow z-[100] overflow-hidden min-h-screen pt-28 pb-20 md:pb-28">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] rounded-full blur-[175px] opacity-30 bg-gradient-to-br from-blue-500/15 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-[2000px] w-[88%] mx-auto md:w-[85%]">
        {/* ── Hero Section ── */}
        <div className="max-w-3xl space-y-4 pt-4">
          <span className="text-xs font-matter font-medium tracking-widest text-indigo-600 uppercase fade-in-el">Contact</span>
          <h1 className="text-3xl md:text-[38px] font-season_mix font-[420] text-stone-900 leading-[1.1] fade-in-el">
            Secure Your AI Roadmap.
            <br />
            <span className="text-indigo-600 italic font-[380]">Connect With Our Team.</span>
          </h1>
          <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-2xl fade-in-el">
            Schedule an architectural review session with our chief AI engineers. Discuss secure on-premise deployments, localized fine-tuning setups, or compliant vector storage layers.
          </p>
        </div>

        {/* ── Main Layout ── */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12 md:mt-16 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6 min-h-[460px] flex flex-col justify-center">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-5 transition-all duration-500 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_4px_12px_rgba(16,185,129,0.12)]">
                  <svg className="w-8 h-8 text-emerald-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-season_mix font-[420] text-stone-900">Discussion Request Received</h3>
                  <p className="text-xs font-matter font-light text-stone-500 max-w-sm mx-auto leading-relaxed">
                    Thank you. A senior AI solutions architect has been assigned and will reach out to you within 24 business hours to discuss your environment and secure onboarding.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-matter font-semibold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 duration-200"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-season_mix font-[420] text-stone-900">Request Technical Discussion</h2>
                {status === "error" && (
                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-3.5 flex items-start gap-3 animate-in fade-in slide-in-from-top-1 text-rose-800 text-xs font-matter font-medium">
                    <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="space-y-1">
                      <span className="font-semibold text-rose-950">Submission Failed</span>
                      <p className="text-rose-700/90 font-light leading-relaxed">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <form className="space-y-4 font-matter" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Organization / Bank</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                      placeholder="Enter organization name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Requirement Details *</label>
                    <textarea
                      rows={4}
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors resize-none disabled:opacity-60"
                      placeholder="Tell us about your environment (On-premise, AWS VPC, GPU access, compliance regulations, etc.)"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_16px_rgba(79,70,229,0.15)] hover:shadow-[0_4px_20px_rgba(79,70,229,0.25)] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing Secure Request...</span>
                      </>
                    ) : (
                      <>
                        Submit Discussion Request <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-4">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[9px] font-matter font-medium tracking-wide uppercase bg-indigo-500/8 text-indigo-600 border border-indigo-500/15">
                Headquarters
              </span>
              <h3 className="text-sm font-season_mix font-[420] text-stone-900">Arvya Tech Private Limited</h3>
              <div className="space-y-3 text-xs font-matter font-light text-stone-500">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>5th floor, The Herbt's Square Building, Autonagar, APIIC I, T Park, Mangalagiri, Amaravati, Andhra Pradesh 522503</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>info@arvya.in</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full blur-[80px] opacity-40 bg-indigo-500" />
              <div className="space-y-2 z-10 relative">
                <span className="text-[9.5px] font-matter tracking-widest text-indigo-400 uppercase">Sovereign Guarantee</span>
                <h4 className="text-sm font-season_mix font-[420] text-white">100% Zero-Egress Sandbox</h4>
                <p className="text-[11.5px] font-matter font-light text-zinc-400 leading-relaxed">
                  We specialize in deploying localized pilot systems. We sign standard corporate NDA and compliance agreements before examining client file shares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
