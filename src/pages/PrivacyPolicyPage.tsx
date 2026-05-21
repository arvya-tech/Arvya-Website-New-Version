import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PrivacyPolicyPage = () => {
  return (
    <main className="relative bg-zinc-50 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-sm font-matter transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <p className="text-indigo-600 text-[11px] uppercase tracking-[0.22em] font-semibold font-matter mb-3">Legal</p>
        <h1 className="font-season_mix font-[420] text-stone-900 text-[2rem] md:text-[2.6rem] leading-[1.1] tracking-[-0.02em] mb-3">
          Privacy Policy
        </h1>
        <p className="text-stone-400 font-matter text-sm mb-12">Last updated: May 21, 2025</p>

        <div className="policy-body font-matter text-stone-600 text-[15.5px] leading-[1.85] space-y-10">

          <section>
            <h2>1. Introduction</h2>
            <p>Arvya Tech Private Limited ("Arvya Tech", "we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>arvya.in</strong> or use any of our products or services.</p>
            <p className="mt-3">Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company name when you fill out contact forms or register for services.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs — collected automatically via cookies and analytics tools.</li>
              <li><strong>Communications:</strong> Messages you send via our contact form or support chatbot.</li>
              <li><strong>Business Data:</strong> Information you provide when engaging with our AI platform, such as document uploads for processing (stored only within your sovereign deployment).</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Deliver, operate, and improve our products and services</li>
              <li>Send transactional communications (service updates, invoices)</li>
              <li>Send marketing communications — only with your explicit consent</li>
              <li>Analyse website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sovereignty &amp; Storage</h2>
            <p>Arvya Tech's on-premise AI deployments are designed so that <strong>your data never leaves your infrastructure</strong>. For cloud-assisted features, data is processed within India (Mumbai region) in compliance with applicable Indian data protection regulations. We do not sell, trade, or rent your personal data to third parties.</p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>We use cookies and similar tracking technologies to enhance your browsing experience. Please refer to our <Link to="/cookies-policy" className="text-indigo-600 hover:underline">Cookies Policy</Link> for detailed information on the cookies we use and how to manage them.</p>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>We may use third-party analytics providers (e.g., Google Analytics) that collect, monitor, and analyse web usage data. These third parties have their own privacy policies governing the use of such information. We do not share personally identifiable information with these providers.</p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 24 months.</p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:privacy@arvya.in" className="text-indigo-600 hover:underline">privacy@arvya.in</a>.</p>
          </section>

          <section>
            <h2>9. Security</h2>
            <p>We implement industry-standard security measures — including encryption in transit (TLS), access controls, and regular security audits — to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2>10. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us immediately.</p>
          </section>

          <section>
            <h2>11. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes are effective immediately upon posting. We will notify you of significant changes via email or a prominent notice on our website.</p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-4 p-5 bg-white border border-zinc-200 rounded-2xl">
              <p className="font-semibold text-stone-800">Arvya Tech Private Limited</p>
              <p>Email: <a href="mailto:privacy@arvya.in" className="text-indigo-600 hover:underline">privacy@arvya.in</a></p>
              <p>General: <a href="mailto:info@arvya.in" className="text-indigo-600 hover:underline">info@arvya.in</a></p>
              <p>Website: <a href="https://arvya.in" className="text-indigo-600 hover:underline">arvya.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
