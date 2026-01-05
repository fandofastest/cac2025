import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "CARS AND COFFEE CHESTER LTD",
    template: "%s | CARS AND COFFEE CHESTER LTD",
  },
  description: "Official website of CARS AND COFFEE CHESTER LTD — fostering automotive culture and community events in Chester, UK.",
  keywords: [
    "Cars and Coffee",
    "Chester",
    "Automotive community",
    "Events",
    "UK Private Limited Company"
  ],
  openGraph: {
    title: "CARS AND COFFEE CHESTER LTD",
    description: "Automotive community events and brand collaborations in Chester, UK.",
    type: "website",
    locale: "en_GB",
    siteName: "CARS AND COFFEE CHESTER LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARS AND COFFEE CHESTER LTD",
    description: "Automotive community events and brand collaborations in Chester, UK.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
