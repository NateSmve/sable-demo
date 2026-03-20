"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const CTA = { href: "/contact", label: "Reserve a Table" };

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-[0.15em] uppercase text-emerald-100 hover:text-emerald-300 transition-colors"
        >
          Sable
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-emerald-100 bg-stone-800/50"
                  : "text-stone-400 hover:text-emerald-100 hover:bg-stone-800/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-700 text-emerald-50 hover:bg-emerald-600 transition-colors"
          >
            {CTA.label}
          </Link>
        </div>

        <button
          className="md:hidden text-stone-400 hover:text-emerald-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-950 px-6 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-stone-400 hover:text-emerald-100 hover:bg-stone-800/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-700 text-emerald-50 hover:bg-emerald-600 transition-colors text-center mt-2"
          >
            {CTA.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
