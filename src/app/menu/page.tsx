import { buildMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMeta({
  title: "Menu",
  description:
    "Explore the seasonal menu at Sable — farm-to-table dishes crafted from locally sourced ingredients. A demo by SMVE Web Dev.",
  path: "/menu",
});

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menu: MenuSection[] = [
  {
    title: "Starters",
    items: [
      {
        name: "Roasted Beet Salad",
        description:
          "Golden & ruby beets, chèvre mousse, candied walnuts, citrus vinaigrette",
        price: "$16",
      },
      {
        name: "Burrata & Heirloom Tomato",
        description:
          "Fresh burrata, vine-ripened heirloom tomatoes, aged balsamic, torn basil",
        price: "$18",
      },
      {
        name: "Crispy Artichoke Hearts",
        description: "Lemon aioli, shaved pecorino, chili flake, herbs",
        price: "$14",
      },
      {
        name: "Seasonal Soup",
        description:
          "Chef's daily creation using this week's harvest — ask your server",
        price: "$12",
      },
    ],
  },
  {
    title: "Mains",
    items: [
      {
        name: "Pan-Seared Halibut",
        description:
          "Spring pea purée, fingerling potatoes, charred lemon beurre blanc",
        price: "$38",
      },
      {
        name: "Braised Short Rib",
        description:
          "Cabernet reduction, root vegetable medley, horseradish gremolata",
        price: "$42",
      },
      {
        name: "Wild Mushroom Risotto",
        description:
          "Arborio rice, foraged chanterelles, aged parmesan, truffle oil",
        price: "$28",
      },
      {
        name: "Grilled Heritage Pork Chop",
        description: "Stone fruit mostarda, crispy polenta, broccolini",
        price: "$36",
      },
      {
        name: "Duck Breast",
        description: "Cherry gastrique, sweet potato gratin, wilted kale",
        price: "$40",
      },
      {
        name: "Handmade Pappardelle",
        description: "Slow-braised lamb ragù, pecorino romano, fresh herbs",
        price: "$30",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Roasted Brussels Sprouts",
        description: "Maple glaze, crispy pancetta, toasted hazelnuts",
        price: "$12",
      },
      {
        name: "Grilled Broccolini",
        description: "Lemon zest, garlic, chili oil",
        price: "$10",
      },
      {
        name: "Truffle Fries",
        description: "Parmesan, fresh herbs, truffle aioli",
        price: "$14",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Dark Chocolate Torte",
        description: "Raspberry coulis, crème fraîche, edible flowers",
        price: "$14",
      },
      {
        name: "Crème Brûlée",
        description: "Madagascar vanilla bean, caramelized sugar",
        price: "$12",
      },
      {
        name: "Seasonal Fruit Galette",
        description:
          "Buttery pastry, seasonal fruit, house-made vanilla ice cream",
        price: "$13",
      },
    ],
  },
  {
    title: "Sunday Brunch",
    items: [
      {
        name: "Eggs Benedict",
        description:
          "Poached farm eggs, heritage ham, brioche, hollandaise",
        price: "$18",
      },
      {
        name: "Lemon Ricotta Pancakes",
        description: "Blueberry compote, whipped cream, maple syrup",
        price: "$16",
      },
      {
        name: "Avocado Toast",
        description:
          "Sourdough, smashed avocado, poached egg, everything seasoning, microgreens",
        price: "$15",
      },
      {
        name: "Steak & Eggs",
        description:
          "6oz flat iron, two eggs any style, roasted potatoes, chimichurri",
        price: "$24",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
          Seasonal &middot; Local &middot; Fresh
        </p>
        <h1
          className="text-5xl text-[var(--charcoal)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Our Menu
        </h1>
        <div className="ornament" />
        <p className="text-[var(--warm-gray)] mt-6 max-w-lg mx-auto leading-relaxed">
          Seasonal dishes crafted from the finest local ingredients.
          Our menu evolves with the harvest.
        </p>
        <p className="text-[var(--burgundy)]/60 text-xs mt-4">
          Menu items and prices change seasonally. Ask your server about
          today&apos;s specials.
        </p>
      </div>

      {/* Menu Sections */}
      {menu.map((section) => (
        <div key={section.title} className="mb-20">
          <h2
            className="text-2xl text-center text-[var(--burgundy)] mb-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {section.title}
          </h2>

          <div className="space-y-5">
            {section.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-baseline">
                  <p className="font-medium text-[var(--charcoal)]">
                    {item.name}
                  </p>
                  <span className="menu-dots" />
                  <span
                    className="text-[var(--burgundy)] font-medium whitespace-nowrap"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--warm-gray-light)] mt-1 ml-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer note */}
      <div className="text-center pt-8 border-t border-[var(--cream-dark)]">
        <div className="ornament mb-6" />
        <p className="text-[var(--warm-gray)] text-sm mb-2">
          Please inform your server of any allergies or dietary restrictions.
        </p>
        <p className="text-[var(--warm-gray-light)] text-xs">
          A 20% gratuity is added for parties of 6 or more.
        </p>
      </div>
    </div>
  );
}
