import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);

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
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6">
            <h2 className="text-lg font-season_mix font-[420] text-stone-900">Request Technical Discussion</h2>
            <form className="space-y-4 font-matter" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Work Email</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Organization / Bank</label>
                <input
                  type="text"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Enter organization name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Requirement Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell us about your environment (On-premise, AWS VPC, GPU access, compliance regulations, etc.)"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                Submit Discussion Request <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
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
