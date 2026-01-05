import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-accent-500/30 mt-16">
      <div className="container-responsive py-8 text-sm text-white/70 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>© {year} CARS AND COFFEE CHESTER LTD. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link className="link" href="/privacy-policy">Privacy Policy</Link>
          <Link className="link" href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
