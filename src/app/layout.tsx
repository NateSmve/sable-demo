import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import DemoBanner from "@/components/DemoBanner";
import { buildMeta } from "@/lib/seo";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMeta({
  title: "Farm-to-Table Dining",
  description:
    "Sable — Modern farm-to-table dining in the heart of the city. Seasonal menus, local ingredients, unforgettable meals. A demo project by SMVE Web Dev.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} font-sans antialiased bg-stone-950 text-stone-100`}
      >
        <DemoBanner />
        <Nav />
        <main>{children}</main>

        <footer className="border-t border-stone-800/50 py-12 mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="font-bold text-lg tracking-[0.15em] uppercase text-emerald-100 mb-3">
                  Sable
                </p>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Modern farm-to-table dining.
                  <br />
                  Seasonal. Local. Unforgettable.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-300 mb-3">Hours</p>
                <div className="flex flex-col gap-1 text-sm text-stone-400">
                  <p>Tuesday – Thursday: 5 PM – 10 PM</p>
                  <p>Friday – Saturday: 5 PM – 11 PM</p>
                  <p>Sunday Brunch: 10 AM – 2 PM</p>
                  <p>Monday: Closed</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-300 mb-3">Quick Links</p>
                <div className="flex flex-col gap-2 text-sm text-stone-400">
                  <a
                    href="/menu"
                    className="underline decoration-stone-600 hover:text-emerald-200 hover:decoration-emerald-400 transition-colors"
                  >
                    Menu
                  </a>
                  <a
                    href="/#story"
                    className="underline decoration-stone-600 hover:text-emerald-200 hover:decoration-emerald-400 transition-colors"
                  >
                    Our Story
                  </a>
                  <a
                    href="/contact"
                    className="underline decoration-stone-600 hover:text-emerald-200 hover:decoration-emerald-400 transition-colors"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
              <p>© {new Date().getFullYear()} Sable. All rights reserved.</p>
              <p>
                [DEMO] Built by{" "}
                <a
                  href="https://smve.cloud"
                  className="text-emerald-500/70 underline hover:text-emerald-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SMVE Web Dev
                </a>{" "}
                as a portfolio piece.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
