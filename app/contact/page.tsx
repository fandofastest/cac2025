import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CARS AND COFFEE CHESTER LTD. Find our registered office address and email.",
};

export default function ContactPage() {
  return (
    <ContentSection title="Contact" intro="We welcome enquiries regarding upcoming events and collaboration opportunities.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="font-semibold">Company Details</h3>
          <dl className="mt-3 text-white/80 text-sm">
            <dt className="font-medium text-white">Company Name</dt>
            <dd>CARS AND COFFEE CHESTER LTD</dd>
            <dt className="font-medium text-white mt-3">Registered Office</dt>
            <dd>123 Example Street, Chester, CH1 1AA, United Kingdom</dd>
            <dt className="font-medium text-white mt-3">Email</dt>
            <dd><a className="link" href="mailto:contact@carsandcoffeechester.co.uk">contact@carsandcoffeechester.co.uk</a></dd>
          </dl>
        </div>
        <ContactForm />
      </div>
    </ContentSection>
  );
}
