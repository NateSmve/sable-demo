import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMeta({
  title: "Farm-to-Table Dining",
  description:
    "Sable — Modern farm-to-table dining. Seasonal menus crafted from locally sourced ingredients. A demo by SMVE Web Dev.",
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 mb-6">
          Farm-to-Table · Seasonal · Local
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Dining rooted in
          <br />
          <span className="text-emerald-400">the seasons.</span>
        </h1>
        <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-10">
          At Sable, every dish tells a story — from the farms we partner with to
          the plates we serve. Seasonal ingredients, bold flavors, and an
          atmosphere that feels like home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-600 transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="px-6 py-3 rounded-lg border border-stone-700 text-stone-300 font-semibold hover:border-stone-500 hover:text-white transition-colors"
          >
            View Menu
          </Link>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="highlights" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-stone-500 mb-10">
          From our kitchen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Roasted Beet Salad",
              desc: "Golden & ruby beets, chèvre mousse, candied walnuts, citrus vinaigrette",
              price: "$16",
            },
            {
              name: "Pan-Seared Halibut",
              desc: "Spring pea purée, fingerling potatoes, charred lemon beurre blanc",
              price: "$38",
            },
            {
              name: "Braised Short Rib",
              desc: "Cabernet reduction, root vegetable medley, horseradish gremolata",
              price: "$42",
            },
            {
              name: "Wild Mushroom Risotto",
              desc: "Arborio rice, foraged chanterelles, aged parmesan, truffle oil",
              price: "$28",
            },
            {
              name: "Grilled Heritage Pork Chop",
              desc: "Stone fruit mostarda, crispy polenta, broccolini",
              price: "$36",
            },
            {
              name: "Seasonal Tasting Menu",
              desc: "Five courses crafted from this week's harvest — ask your server for details",
              price: "$85",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col p-5 rounded-2xl border border-stone-800 bg-stone-900/50"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-white">{item.name}</p>
                <span className="text-emerald-400 font-semibold text-sm ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/menu"
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium underline underline-offset-4 decoration-emerald-800 hover:decoration-emerald-400 transition-colors"
          >
            See full menu →
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="border-t border-stone-800 bg-stone-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Locally Sourced",
                body: "Every ingredient comes from farms within 100 miles. We visit our growers weekly to hand-select the season's best produce, meats, and dairy.",
              },
              {
                title: "Seasonally Inspired",
                body: "Our menu changes with the harvest. What's ripe today becomes tomorrow's special — ensuring every visit brings something new to the table.",
              },
              {
                title: "Warm & Inviting",
                body: "From the reclaimed wood tables to the open kitchen, Sable was designed to feel like gathering at a friend's home — relaxed, warm, and welcoming.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-12">
          Visit Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Hours</h3>
            <div className="space-y-2 text-stone-400 text-sm">
              <div className="flex justify-between">
                <span>Tuesday – Thursday</span>
                <span className="text-stone-300">5:00 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday – Saturday</span>
                <span className="text-stone-300">5:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday Brunch</span>
                <span className="text-stone-300">10:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="text-stone-500">Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Location
            </h3>
            <div className="text-stone-400 text-sm space-y-2">
              <p>742 Elm Street</p>
              <p>Portland, OR 97205</p>
              <p className="text-stone-500 mt-4">
                Valet parking available Friday–Saturday evenings.
                <br />
                Street parking and nearby garage on weekdays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Your table is waiting.
        </h2>
        <p className="text-stone-400 mb-8">
          Reserve your spot for an evening you won&apos;t forget.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-600 transition-colors text-lg"
        >
          Make a Reservation →
        </Link>
      </section>
    </div>
  );
}
