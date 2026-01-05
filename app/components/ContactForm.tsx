"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    // Frontend-only: no submission handling; simulate acknowledgement
    const name = String(formData.get("name") || "");
    setStatus(`Thank you${name ? ", " + name : ""}. Your message has been prepared locally on your device. This website does not transmit or store form entries.`);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4" aria-describedby="contact-note">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">Name</label>
        <input id="name" name="name" type="text" className="w-full rounded-md bg-brand-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email</label>
        <input id="email" name="email" type="email" className="w-full rounded-md bg-brand-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-md bg-brand-900 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20" required />
      </div>
      <p id="contact-note" className="text-xs text-white/60">
        For your privacy, this site does not transmit or store form entries. For formal correspondence, please email us directly.
      </p>
      <div>
        <button type="submit" className="btn-primary">Prepare Message</button>
      </div>
      {status && (
        <div role="status" className="text-sm text-white/80">{status}</div>
      )}
    </form>
  );
}
