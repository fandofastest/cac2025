import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-responsive text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-white/80">The page you are looking for doesn’t exist or may have moved.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/" className="btn-primary">Go to Home</Link>
          <Link href="/contact" className="link">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
