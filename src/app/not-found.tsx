import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p
        className="text-8xl text-[var(--cream-dark)] mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        404
      </p>
      <h1
        className="text-2xl text-[var(--charcoal)] mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Page not found
      </h1>
      <p className="text-[var(--warm-gray)] mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 text-sm tracking-wider uppercase border border-[var(--burgundy)] text-[var(--burgundy)] hover:bg-[var(--burgundy)] hover:text-white transition-colors"
      >
        Back to Sable
      </Link>
    </div>
  );
}
