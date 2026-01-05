import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CARS AND COFFEE CHESTER LTD hosts relaxed Cars & Coffee meetups and community automotive events in Chester, UK.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection
        title="Welcome"
        intro="We are a UK private limited company dedicated to celebrating automotive culture. Our focus is on safe, welcoming, and community-driven gatherings that bring enthusiasts together."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Cars & Coffee</h3>
            <p className="mt-2 text-white/80 text-sm">Informal morning meetups for enthusiasts to share stories and showcase their cars.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Community</h3>
            <p className="mt-2 text-white/80 text-sm">Connecting people through respectful and inclusive events around Chester.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Collaboration</h3>
            <p className="mt-2 text-white/80 text-sm">Non-financial brand partnerships and consulting to support local initiatives.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Gallery"
        intro="Scenes that reflect our Cars & Coffee spirit and the automotive culture we celebrate in Chester."
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/images/car1.png",
            "/images/car2.png",
            "/images/car3.png",
            "/images/car4.png",
            "/images/car5.png",
          ].map((src, i) => (
            <div key={src} className="card overflow-hidden">
              <Image
                src={src}
                alt={`CARS AND COFFEE CHESTER — event photo ${i + 1}`}
                width={1600}
                height={900}
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
