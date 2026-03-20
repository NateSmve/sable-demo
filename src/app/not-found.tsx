import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-6xl font-bold text-stone-800 mb-4">404</p>
      <h1 className="text-2xl font-bold text-emerald-50 mb-4">Page not found</h1>
      <p className="text-stone-400 mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-emerald-700 text-emerald-50 font-semibold hover:bg-emerald-600 transition-colors"
      >
        Back to Sable
      </Link>
    </div>
  );
}
