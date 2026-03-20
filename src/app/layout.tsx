import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import DemoBanner from "@/components/DemoBanner";
import { buildMeta } from "@/lib/seo";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${geist.variable} ${playfair.variable} font-sans antialiased`}
      >
        <DemoBanner />
        <Nav />
        <main>{children}</main>

        <footer className="border-t border-[var(--cream-dark)] py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              className="text-3xl tracking-wide text-[var(--burgundy)] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sable
            </p>
            <p className="text-sm text-[var(--warm-gray)] mb-6 max-w-md mx-auto leading-relaxed">
              Modern farm-to-table dining. Seasonal menus crafted from locally
              sourced ingredients in the heart of Portland.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--warm-gray)] mb-8">
              <a
                href="/menu"
                className="hover:text-[var(--burgundy)] transition-colors"
              >
                Menu
              </a>
              <span className="text-[var(--cream-dark)]">|</span>
              <a
                href="/#story"
                className="hover:text-[var(--burgundy)] transition-colors"
              >
                Our Story
              </a>
              <span className="text-[var(--cream-dark)]">|</span>
              <a
                href="/contact"
                className="hover:text-[var(--burgundy)] transition-colors"
              >
                Reservations
              </a>
            </div>
            <div className="ornament mb-6" />
            <div className="text-xs text-[var(--warm-gray-light)] space-y-1">
              <p>&copy; {new Date().getFullYear()} Sable. All rights reserved.</p>
              <p>
                [DEMO] Built by{" "}
                <a
                  href="https://smve.cloud"
                  className="text-[var(--burgundy)] underline hover:text-[var(--burgundy-light)] transition-colors"
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
