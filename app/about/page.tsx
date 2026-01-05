import type { Metadata } from "next";
import ContentSection from "../components/ContentSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CARS AND COFFEE CHESTER LTD, a UK private limited company focused on automotive culture and community events.",
};

export default function AboutPage() {
  return (
    <ContentSection
      title="About CARS AND COFFEE CHESTER LTD"
      intro="Founded to celebrate the passion for cars in and around Chester, we organise relaxed gatherings that prioritise community, respect, and safety."
    >
      <div className="prose prose-invert max-w-none">
        <p>
          CARS AND COFFEE CHESTER LTD is a private company limited by shares incorporated in the United Kingdom. We operate as an organiser and facilitator of non-commercial community events that promote positive automotive culture.
        </p>
        <p>
          Our approach is simple: provide a welcoming space for enthusiasts, encourage responsible behaviour, and work with local partners to ensure events respect the community and surroundings.
        </p>
      </div>
    </ContentSection>
  );
}
