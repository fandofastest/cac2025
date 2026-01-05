import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Information about our recurring Cars & Coffee events in Chester. No bookings or payments are handled on this website.",
};

export default function EventsPage() {
  return (
    <ContentSection
      title="Events"
      intro="Our Cars & Coffee events are informal, family-friendly gatherings. Dates and locations are announced via our social channels or local partners."
    >
      <div className="prose prose-invert max-w-none">
        <ul>
          <li>Recurring morning meetups in the Chester area.</li>
          <li>No booking or payment is required through this website.</li>
          <li>Please follow venue guidelines and be respectful of neighbours.</li>
          <li>Responsible driving is mandatory in and around event locations.</li>
        </ul>
        <p className="mt-4">For the latest information, please contact us directly.</p>
      </div>
    </ContentSection>
  );
}
