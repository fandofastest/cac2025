import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover what we do: Cars & Coffee events, community engagement, and non-financial brand collaboration in Chester.",
};

export default function ServicesPage() {
  return (
    <ContentSection
      title="What We Do"
      intro="We create opportunities for enthusiasts to connect and for the community to enjoy well-managed automotive gatherings."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Cars & Coffee Events</h3>
          <p className="mt-2 text-white/80 text-sm">Recurring morning meetups featuring varied marques and friendly conversation.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Community Engagement</h3>
          <p className="mt-2 text-white/80 text-sm">Working with venues and local stakeholders to ensure considerate, safe events.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Brand Collaboration</h3>
          <p className="mt-2 text-white/80 text-sm">Non-financial collaborations and consulting to support awareness and good practice.</p>
        </div>
      </div>
    </ContentSection>
  );
}
