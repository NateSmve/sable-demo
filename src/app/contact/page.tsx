"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

const PARTY_SIZES = ["1-2 guests", "3-4 guests", "5-6 guests", "7-8 guests", "9+ guests (private dining)"];
const TIME_SLOTS = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      service: `Reservation: ${fd.get("party_size")} on ${fd.get("date")} at ${fd.get("time")}`,
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-900/50 border border-emerald-800 flex items-center justify-center">
          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Reservation request received!
        </h1>
        <p className="text-stone-400 text-lg mb-8">
          We&apos;ll confirm your reservation via email within a few hours.
          For same-day requests, please call us directly.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-600 transition-colors"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Reserve a Table</h1>
        <p className="text-stone-400 text-lg">
          Fill out the form below and we&apos;ll confirm your reservation via
          email. For same-day bookings, please call us at{" "}
          <span className="text-stone-300">(503) 555-0142</span>.
        </p>
        <p className="text-emerald-500/60 text-xs mt-3">
          [DEMO] This is a portfolio piece — no real reservations are processed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
              Your name <span className="text-emerald-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
              Email <span className="text-emerald-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@email.com"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Date + Time + Party Size */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-stone-300 mb-2">
              Date <span className="text-emerald-400">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-stone-300 mb-2">
              Preferred time <span className="text-emerald-400">*</span>
            </label>
            <select
              id="time"
              name="time"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none"
            >
              <option value="">Select…</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="party_size" className="block text-sm font-medium text-stone-300 mb-2">
              Party size <span className="text-emerald-400">*</span>
            </label>
            <select
              id="party_size"
              name="party_size"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none"
            >
              <option value="">Select…</option>
              {PARTY_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
            Special requests <span className="text-stone-500 font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Dietary restrictions, celebrations, seating preferences…"
            className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
          />
        </div>

        {state === "error" && (
          <div className="px-4 py-3 rounded-lg bg-red-950 border border-red-800 text-red-300 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full sm:w-auto px-8 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {state === "submitting" ? "Sending…" : "Request Reservation →"}
        </button>
        <p className="text-xs text-stone-500">
          We&apos;ll confirm your reservation within a few hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
