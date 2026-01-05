import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using the CARS AND COFFEE CHESTER LTD website. No warranties, no transactions, governed by the laws of England and Wales.",
};

export default function TermsPage() {
  return (
    <ContentSection title="Terms of Service" intro="Please read these terms carefully before using this website.">
      <div className="prose prose-invert max-w-none text-white/90">
        <h3>Acceptance of terms</h3>
        <p>
          By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.
        </p>

        <h3>Website purpose</h3>
        <p>
          This site provides information about CARS AND COFFEE CHESTER LTD and its community events. No products or paid services are offered, and no transactions occur via this site.
        </p>

        <h3>Use of the site</h3>
        <ul>
          <li>Do not misuse the site or attempt to disrupt its operation.</li>
          <li>Respect intellectual property rights and applicable laws.</li>
          <li>Content is provided for general information only and may be updated from time to time.</li>
        </ul>

        <h3>Disclaimers</h3>
        <p>
          The site is provided on an "as is" basis without warranties of any kind. We do not guarantee accuracy, completeness, or availability.
        </p>

        <h3>Limitation of liability</h3>
        <p>
          To the fullest extent permitted by law, CARS AND COFFEE CHESTER LTD shall not be liable for any indirect, incidental, or consequential losses arising from your use of the site.
        </p>

        <h3>Governing law</h3>
        <p>
          These terms and any disputes arising in connection with them are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.
        </p>

        <h3>Changes</h3>
        <p>
          We may update these terms from time to time. Material changes will be reflected on this page with an updated effective date.
        </p>

        <h3>Contact</h3>
        <p>
          For questions regarding these terms, please email <a className="link" href="mailto:contact@carsandcoffeechester.co.uk">contact@carsandcoffeechester.co.uk</a>.
        </p>
      </div>
    </ContentSection>
  );
}
