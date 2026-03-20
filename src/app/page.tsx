import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMeta({
  title: "Farm-to-Table Dining",
  description:
    "Sable — Modern farm-to-table dining. Seasonal menus crafted from locally sourced ingredients. A demo by SMVE Web Dev.",
});

const HIGHLIGHTS = [
  {
    name: "Roasted Beet Salad",
    desc: "Golden & ruby beets, chèvre mousse, candied walnuts",
    price: "$16",
  },
  {
    name: "Pan-Seared Halibut",
    desc: "Spring pea purée, fingerling potatoes, lemon beurre blanc",
    price: "$38",
  },
  {
    name: "Braised Short Rib",
    desc: "Cabernet reduction, root vegetables, horseradish gremolata",
    price: "$42",
  },
  {
    name: "Wild Mushroom Risotto",
    desc: "Foraged chanterelles, aged parmesan, truffle oil",
    price: "$28",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero: Split Layout ─────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20 lg:py-0">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
            Est. 2019 &middot; Portland, Oregon
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[var(--charcoal)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Dining rooted
            <br />
            in the seasons.
          </h1>
          <p className="text-lg text-[var(--warm-gray)] max-w-md mb-10 leading-relaxed">
            At Sable, every dish tells a story — from the farms we partner with
            to the plates we serve. Seasonal ingredients, bold flavors, and an
            atmosphere that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm tracking-wider uppercase bg-[var(--burgundy)] text-white hover:bg-[var(--burgundy-light)] transition-colors text-center"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-block px-8 py-3 text-sm tracking-wider uppercase border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white transition-colors text-center"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Right: Visual Block (abstract, no fake images) */}
        <div className="hidden lg:block relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--burgundy)] via-[var(--burgundy-dark)] to-[#3D1A1E]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="ornament mb-4" style={{ filter: "invert(1) brightness(2)" }} />
              <p
                className="text-6xl text-white/20"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                S
              </p>
              <p className="text-xs tracking-[0.4em] uppercase mt-4 text-white/40">
                Farm to Table
              </p>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-white/10" />
          <div className="absolute bottom-20 left-16 w-16 h-16 rounded-full border border-white/5" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white/5" />
        </div>
      </section>

      {/* ── Philosophy Strip ──────────────────────────────────── */}
      <section className="bg-[var(--burgundy)] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Locally Sourced", detail: "Every ingredient from farms within 100 miles" },
              { label: "Seasonally Inspired", detail: "Our menu changes with the harvest" },
              { label: "Warm & Inviting", detail: "Designed to feel like gathering at home" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-xl text-white/90 mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu Highlights ───────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            From Our Kitchen
          </p>
          <h2
            className="text-4xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Seasonal Highlights
          </h2>
        </div>

        <div className="space-y-6">
          {HIGHLIGHTS.map((item) => (
            <div key={item.name} className="flex items-baseline">
              <div>
                <p className="font-medium text-[var(--charcoal)]">{item.name}</p>
                <p className="text-sm text-[var(--warm-gray-light)] mt-0.5">
                  {item.desc}
                </p>
              </div>
              <span className="menu-dots" />
              <span
                className="text-[var(--burgundy)] font-medium whitespace-nowrap"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-8 py-3 text-sm tracking-wider uppercase border border-[var(--burgundy)] text-[var(--burgundy)] hover:bg-[var(--burgundy)] hover:text-white transition-colors"
          >
            Full Menu
          </Link>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section id="story" className="bg-[var(--cream-dark)]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story visual */}
            <div className="relative aspect-[4/5] bg-gradient-to-b from-[var(--cream)] to-[var(--cream-dark)] border border-[var(--warm-gray-light)]/30 flex items-center justify-center">
              <div className="text-center px-8">
                <p
                  className="text-8xl text-[var(--burgundy)]/10"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;
                </p>
                <p
                  className="text-lg text-[var(--warm-gray)] italic leading-relaxed -mt-8"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Food is our common ground, a universal experience.
                </p>
                <p className="text-xs text-[var(--warm-gray-light)] mt-4 tracking-wider uppercase">
                  — James Beard
                </p>
              </div>
            </div>

            {/* Story text */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
                Our Story
              </p>
              <h2
                className="text-4xl text-[var(--charcoal)] mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                A table set
                <br />
                with intention.
              </h2>
              <div className="space-y-5 text-[var(--warm-gray)] leading-relaxed">
                <p>
                  Sable was born from a simple belief: that the best meals come
                  from knowing where your food begins. We partner directly with
                  farms within 100 miles of our kitchen, visiting our growers
                  weekly to hand-select the season&apos;s best.
                </p>
                <p>
                  Our menu changes with the harvest. What&apos;s ripe today becomes
                  tomorrow&apos;s special — ensuring every visit brings something
                  new to the table.
                </p>
                <p>
                  From the reclaimed wood tables to the open kitchen, every detail
                  was designed to feel like gathering at a friend&apos;s home —
                  relaxed, warm, and welcoming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours & Location (side by side, not grid) ─────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            Plan Your Visit
          </p>
          <h2
            className="text-4xl text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hours & Location
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3
              className="text-lg text-[var(--burgundy)] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Dining Hours
            </h3>
            <div className="space-y-3 text-[var(--warm-gray)]">
              {[
                { day: "Tuesday – Thursday", time: "5:00 PM – 10:00 PM" },
                { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
                { day: "Sunday Brunch", time: "10:00 AM – 2:00 PM" },
                { day: "Monday", time: "Closed" },
              ].map((row) => (
                <div key={row.day} className="flex justify-between text-sm">
                  <span>{row.day}</span>
                  <span className={row.time === "Closed" ? "text-[var(--warm-gray-light)]" : "text-[var(--charcoal)]"}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-lg text-[var(--burgundy)] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Find Us
            </h3>
            <div className="text-sm text-[var(--warm-gray)] space-y-2">
              <p className="text-[var(--charcoal)]">742 Elm Street</p>
              <p className="text-[var(--charcoal)]">Portland, OR 97205</p>
              <p className="mt-4 text-[var(--warm-gray-light)]">
                Valet parking available Friday–Saturday evenings.
              </p>
              <p className="text-[var(--warm-gray-light)]">
                Street parking and nearby garage on weekdays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[var(--charcoal)] text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="ornament mb-6" style={{ filter: "invert(1) brightness(2)" }} />
          <h2
            className="text-4xl mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your table is waiting.
          </h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto">
            Reserve your spot for an evening you won&apos;t forget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 text-sm tracking-wider uppercase border border-white text-white hover:bg-white hover:text-[var(--charcoal)] transition-colors"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
}
