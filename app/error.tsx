"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en-GB">
      <body>
        <section className="section">
          <div className="container-responsive text-center">
            <h1 className="text-3xl font-semibold">Something went wrong</h1>
            <p className="mt-3 text-white/80">An unexpected error occurred. Please try again or return to the home page.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => reset()} className="btn-primary">Try again</button>
              <a href="/" className="link">Go to Home</a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
