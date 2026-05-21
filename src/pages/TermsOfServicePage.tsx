import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsOfServicePage = () => {
  return (
    <main className="relative bg-zinc-50 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-sm font-matter transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <p className="text-indigo-600 text-[11px] uppercase tracking-[0.22em] font-semibold font-matter mb-3">Legal</p>
        <h1 className="font-season_mix font-[420] text-stone-900 text-[2rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.02em] mb-3">
          Terms of Service
        </h1>
        <p className="text-stone-400 font-matter text-sm mb-12">Last updated: May 21, 2025</p>

        <div className="policy-body font-matter text-stone-600 text-[15.5px] leading-[1.85] space-y-10">

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using any website, product, or service offered by <strong>Arvya Tech Private Limited</strong> ("Arvya Tech", "we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use our services.</p>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>Arvya Tech provides AI-powered enterprise software solutions including, but not limited to, on-premise AI deployments, agentic workflow systems, data infrastructure tools, industry-specific AI models, and the Invoicy and Founding Legals platforms (collectively, the "Services").</p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>You must be at least 18 years of age and have the legal authority to enter into contracts on behalf of yourself or your organisation. By using our Services, you represent and warrant that you meet these requirements.</p>
          </section>

          <section>
            <h2>4. Account Responsibilities</h2>
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorised access at <a href="mailto:security@arvya.in" className="text-indigo-600 hover:underline">security@arvya.in</a>.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You may not share account access with unauthorised third parties.</li>
            </ul>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our Services for any unlawful purpose or in violation of any regulations</li>
              <li>Attempt to reverse engineer, decompile, or disassemble any part of our software</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Upload or transmit malicious code, viruses, or harmful data</li>
              <li>Use our AI systems to generate harmful, deceptive, or illegal content</li>
              <li>Resell or sublicense our Services without written authorisation</li>
            </ul>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>All content, software, trademarks, logos, and technology on our platform are the exclusive property of Arvya Tech Private Limited or its licensors. Nothing in these Terms grants you any right to use Arvya Tech's intellectual property without prior written consent.</p>
            <p className="mt-3">You retain full ownership of any data and content you upload to our platform. By uploading content, you grant Arvya Tech a limited licence to process it solely to provide the contracted Services.</p>
          </section>

          <section>
            <h2>7. Data &amp; Privacy</h2>
            <p>Your use of our Services is also governed by our <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. For on-premise deployments, your data remains within your own infrastructure at all times.</p>
          </section>

          <section>
            <h2>8. Subscription &amp; Payment</h2>
            <p>Certain Services are offered on a subscription basis. Pricing, billing cycles, and payment terms are defined in your specific service agreement or order form. All fees are exclusive of applicable taxes. Arvya Tech reserves the right to modify pricing with 30 days' written notice.</p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Arvya Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) our Services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the fees paid by you in the three months preceding the claim.</p>
          </section>

          <section>
            <h2>10. Disclaimer of Warranties</h2>
            <p>Our Services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>Arvya Tech reserves the right to suspend or terminate your access to the Services at any time, with or without cause, with reasonable notice. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive termination shall do so.</p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.</p>
          </section>

          <section>
            <h2>13. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of our Services after changes constitutes your acceptance of the new Terms. We will provide reasonable notice of material changes.</p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <div className="mt-4 p-5 bg-white border border-zinc-200 rounded-2xl">
              <p className="font-semibold text-stone-800">Arvya Tech Private Limited</p>
              <p>Email: <a href="mailto:legal@arvya.in" className="text-indigo-600 hover:underline">legal@arvya.in</a></p>
              <p>General: <a href="mailto:info@arvya.in" className="text-indigo-600 hover:underline">info@arvya.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
