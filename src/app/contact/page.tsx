"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

const PARTY_SIZES = [
  "1-2 guests",
  "3-4 guests",
  "5-6 guests",
  "7-8 guests",
  "9+ guests (private dining)",
];
const TIME_SLOTS = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

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
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[var(--burgundy)] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[var(--burgundy)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1
          className="text-3xl text-[var(--charcoal)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Reservation request received!
        </h1>
        <p className="text-[var(--warm-gray)] text-lg mb-8">
          We&apos;ll confirm your reservation via email within a few hours. For
          same-day requests, please call us directly.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 text-sm tracking-wider uppercase bg-[var(--burgundy)] text-white hover:bg-[var(--burgundy-light)] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-[var(--cream-dark)] text-[var(--charcoal)] placeholder-[var(--warm-gray-light)] focus:outline-none focus:border-[var(--burgundy)] focus:ring-1 focus:ring-[var(--burgundy)] transition-colors";
  const labelClass =
    "block text-sm font-medium text-[var(--charcoal)] mb-2";

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
          Join Us
        </p>
        <h1
          className="text-4xl text-[var(--charcoal)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Reserve a Table
        </h1>
        <div className="ornament" />
        <p className="text-[var(--warm-gray)] mt-6 max-w-md mx-auto">
          Fill out the form below and we&apos;ll confirm your reservation via
          email. For same-day bookings, please call us at{" "}
          <span className="text-[var(--charcoal)]">(503) 555-0142</span>.
        </p>
        <p className="text-[var(--burgundy)]/60 text-xs mt-3">
          [DEMO] This is a portfolio piece — no real reservations are processed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Your name <span className="text-[var(--burgundy)]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-[var(--burgundy)]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Date + Time + Party Size */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="date" className={labelClass}>
              Date <span className="text-[var(--burgundy)]">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="time" className={labelClass}>
              Preferred time <span className="text-[var(--burgundy)]">*</span>
            </label>
            <select
              id="time"
              name="time"
              required
              defaultValue=""
              className={`${inputClass} appearance-none`}
            >
              <option value="">Select...</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="party_size" className={labelClass}>
              Party size <span className="text-[var(--burgundy)]">*</span>
            </label>
            <select
              id="party_size"
              name="party_size"
              required
              defaultValue=""
              className={`${inputClass} appearance-none`}
            >
              <option value="">Select...</option>
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
          <label htmlFor="message" className={labelClass}>
            Special requests{" "}
            <span className="text-[var(--warm-gray-light)] font-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Dietary restrictions, celebrations, seating preferences..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {state === "error" && (
          <div className="px-4 py-3 bg-red-50 border border-red-200 text-red-800 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full sm:w-auto px-10 py-3 text-sm tracking-wider uppercase bg-[var(--burgundy)] text-white hover:bg-[var(--burgundy-light)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {state === "submitting" ? "Sending..." : "Request Reservation"}
        </button>
        <p className="text-xs text-[var(--warm-gray-light)]">
          We&apos;ll confirm your reservation within a few hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
