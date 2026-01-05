"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-accent-500/30 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-brand-900/70">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-wide text-white">CARS & COFFEE CHESTER</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-accent-400 border-b-2 border-accent-400 pb-1"
                    : "text-white/80 hover:text-accent-300"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
