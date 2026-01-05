import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for CARS AND COFFEE CHESTER LTD. We only collect contact form data provided by you. No cookies or analytics by default.",
};

export default function PrivacyPolicyPage() {
  return (
    <ContentSection title="Privacy Policy" intro="This Privacy Policy explains how we handle personal data in connection with this website.">
      <div className="prose prose-invert max-w-none text-white/90">
        <h3>Who we are</h3>
        <p>
          CARS AND COFFEE CHESTER LTD (the "Company") is a private company limited by shares incorporated in the United Kingdom. This website is an informational site for our community events.
        </p>

        <h3>Data we collect</h3>
        <p>
          By default, this website does not collect personal data, set cookies, or use analytics. The only personal data we may receive is information you choose to provide via the on-page contact form (such as your name, email address, and message).
        </p>

        <h3>How we use your data</h3>
        <ul>
          <li>To read and respond to your enquiry.</li>
          <li>To manage basic records of correspondence.</li>
        </ul>

        <h3>Legal basis</h3>
        <p>
          If you contact us, we process your data on the basis of our legitimate interests in responding to enquiries (UK GDPR Article 6(1)(f)).
        </p>

        <h3>Data sharing</h3>
        <p>
          We do not sell your personal data. We will only share data if required by law or necessary to protect our legal rights.
        </p>

        <h3>Retention</h3>
        <p>
          We keep correspondence for as long as reasonably necessary to manage our relationship and comply with legal obligations, then delete it securely.
        </p>

        <h3>Your rights</h3>
        <p>
          Under UK data protection law, you have rights including access, rectification, erasure, restriction, and objection. To exercise these rights, please contact us at <a className="link" href="mailto:contact@carsandcoffeechester.co.uk">contact@carsandcoffeechester.co.uk</a>.
        </p>

        <h3>International transfers</h3>
        <p>
          We do not intentionally transfer your personal data outside the UK. If a transfer is required, we will ensure appropriate safeguards are in place.
        </p>

        <h3>Security</h3>
        <p>
          We use appropriate technical and organisational measures to protect personal data from unauthorised access, alteration, or disclosure.
        </p>

        <h3>Cookies and tracking</h3>
        <p>
          This website does not use cookies for tracking and does not include third-party analytics.
        </p>

        <h3>Contact</h3>
        <p>
          For privacy-related enquiries, please email <a className="link" href="mailto:contact@carsandcoffeechester.co.uk">contact@carsandcoffeechester.co.uk</a>.
        </p>

        <h3>Jurisdiction</h3>
        <p>
          This Privacy Policy is governed by the laws of England and Wales.
        </p>
      </div>
    </ContentSection>
  );
}
