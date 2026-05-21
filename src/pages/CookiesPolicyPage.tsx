import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const CookiesPolicyPage = () => {
  return (
    <main className="relative bg-zinc-50 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-sm font-matter transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <p className="text-indigo-600 text-[11px] uppercase tracking-[0.22em] font-semibold font-matter mb-3">Legal</p>
        <h1 className="font-season_mix font-[420] text-stone-900 text-[2rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.02em] mb-3">
          Cookies Policy
        </h1>
        <p className="text-stone-400 font-matter text-sm mb-12">Last updated: May 21, 2025</p>

        <div className="policy-body font-matter text-stone-600 text-[15.5px] leading-[1.85] space-y-10">

          <section>
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, enhance user experience, and provide analytical information to website owners. Cookies do not harm your device and cannot access any other information on it.</p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            <p>Arvya Tech uses cookies to:</p>
            <ul>
              <li>Ensure the website functions correctly and securely</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how visitors interact with our website (analytics)</li>
              <li>Improve our website content and user experience</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          <section>
            <h2>3. Types of Cookies We Use</h2>

            <div className="overflow-x-auto mt-5">
              <table className="w-full border-collapse text-[14px]">
                <thead>
                  <tr className="bg-zinc-100">
                    <th className="text-left px-4 py-3 font-semibold text-stone-700 border border-zinc-200 rounded-tl-lg">Category</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-700 border border-zinc-200">Purpose</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-700 border border-zinc-200 rounded-tr-lg">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Essential", purpose: "Required for core website functionality (navigation, security, forms). Cannot be disabled.", duration: "Session" },
                    { cat: "Functional", purpose: "Remember your preferences such as language and region settings.", duration: "12 months" },
                    { cat: "Analytics", purpose: "Help us understand how visitors use our site (page views, traffic sources). We use anonymised data only.", duration: "24 months" },
                    { cat: "Marketing", purpose: "Track visits across websites to deliver relevant advertisements. Only used with your explicit consent.", duration: "13 months" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}>
                      <td className="px-4 py-3 border border-zinc-200 font-medium text-stone-700">{row.cat}</td>
                      <td className="px-4 py-3 border border-zinc-200 text-stone-500">{row.purpose}</td>
                      <td className="px-4 py-3 border border-zinc-200 text-stone-500 whitespace-nowrap">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>4. Third-Party Cookies</h2>
            <p>We may allow trusted third-party services to set cookies on our site, including:</p>
            <ul>
              <li><strong>Google Analytics</strong> — anonymised usage analytics</li>
              <li><strong>LinkedIn Insight Tag</strong> — professional network analytics and retargeting (only with consent)</li>
            </ul>
            <p className="mt-3">These third parties have their own privacy and cookie policies which we encourage you to review.</p>
          </section>

          <section>
            <h2>5. Managing Your Cookie Preferences</h2>
            <p>You can control cookies in the following ways:</p>
            <ul>
              <li><strong>Cookie Banner:</strong> When you first visit our site, you can accept or decline non-essential cookies via the consent banner.</li>
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that disabling essential cookies may affect website functionality.</li>
              <li><strong>Opt-out tools:</strong> You can opt out of Google Analytics via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Analytics Opt-out Add-on</a>.</li>
            </ul>
          </section>

          <section>
            <h2>6. Do Not Track</h2>
            <p>Some browsers include a "Do Not Track" (DNT) feature. Our website currently does not respond to DNT signals, however you can control tracking through the cookie settings above.</p>
          </section>

          <section>
            <h2>7. Updates to This Policy</h2>
            <p>We may update this Cookies Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2>8. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at <a href="mailto:privacy@arvya.in" className="text-indigo-600 hover:underline">privacy@arvya.in</a>.</p>
          </section>

          <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="text-indigo-600 hover:underline font-matter">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-indigo-600 hover:underline font-matter">Terms of Service</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
