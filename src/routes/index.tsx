import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { ContactLine, SiteFooterLinks } from "@/components/PolicyPage";
import { FOUNDERS, ORGANIZATION_LD, PAGE_PUBLISHED, PAGE_UPDATED, SITE, SOCIALS } from "@/lib/brand";

import bottleAvif1024 from "@/assets/vantage-bottle-1024.avif";
import bottleJpg from "@/assets/vantage-bottle-1024.jpg";
import bottleWebp1024 from "@/assets/vantage-bottle-1024.webp";
import bottleAvif640 from "@/assets/vantage-bottle-640.avif";
import bottleWebp640 from "@/assets/vantage-bottle-640.webp";
import bottleAvif960 from "@/assets/vantage-bottle-960.avif";
import bottleWebp960 from "@/assets/vantage-bottle-960.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Vantage — Unisex Spiced Woody Parfum" },
      {
        name: "description",
        content:
          "Vantage by Sarkar. Bottled for the second before the deal closes, the point is won, the room turns. A 100ml unisex spiced woody parfum.",
      },
      { property: "og:title", content: "Sarkar Vantage — Already three moves ahead" },
      {
        property: "og:description",
        content:
          "For the ones who already have the edge. Unisex spiced woody parfum from Sarkar.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://sarkar-vantage-edge.lovable.app/" },
      { property: "og:site_name", content: "Sarkar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sarkar Vantage — Already three moves ahead" },
      {
        name: "twitter:description",
        content: "For the ones who already have the edge. Unisex spiced woody parfum from Sarkar.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#121614" },
    ],
    links: [
      { rel: "canonical", href: "https://sarkar-vantage-edge.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        href: bottleAvif960,
        imageSrcSet: `${bottleAvif640} 640w, ${bottleAvif960} 960w, ${bottleAvif1024} 1024w`,
        imageSizes: "(max-width: 1024px) 90vw, 448px",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": `${SITE}/#website`, name: "Sarkar Vantage", url: `${SITE}/`, publisher: { "@id": `${SITE}/#organization` } },
            ORGANIZATION_LD,
            { "@type": "Brand", "@id": `${SITE}/#brand`, name: "Sarkar", slogan: "The One & Only" },
            {
              "@type": "WebPage",
              "@id": `${SITE}/#webpage`,
              url: `${SITE}/`,
              name: "Sarkar Vantage — Unisex Spiced Woody Parfum",
              datePublished: PAGE_PUBLISHED,
              dateModified: PAGE_UPDATED,
              author: { "@id": `${SITE}/#organization` },
              publisher: { "@id": `${SITE}/#organization` },
              mainEntity: { "@id": `${SITE}/#product` },
            },
            {
              "@type": "Product",
              "@id": `${SITE}/#product`,
              name: "Vantage (100ml)",
              brand: { "@id": `${SITE}/#brand` },
              manufacturer: { "@id": `${SITE}/#organization` },
              category: "Unisex Spiced Woody Parfum",
              image: `${SITE}${bottleJpg}`,
              url: `${SITE}/`,
              description: PRODUCT_DESCRIPTION,
              datePublished: PAGE_PUBLISHED,
              dateModified: PAGE_UPDATED,
              additionalProperty: [
                { "@type": "PropertyValue", name: "Top notes", value: "Grapefruit, Ginger" },
                { "@type": "PropertyValue", name: "Heart notes", value: "Cardamom, Violet Leaf" },
                { "@type": "PropertyValue", name: "Base notes", value: "Cedarwood, Vetiver, Ambergris" },
                { "@type": "PropertyValue", name: "Concentration", value: "Parfum, 25% oil" },
                { "@type": "PropertyValue", name: "Volume", value: "100ml" },
              ],
              offers: {
                "@type": "Offer",
                price: "1499",
                priceCurrency: "INR",
                priceValidUntil: "2027-03-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: `${SITE}/`,
                seller: { "@id": `${SITE}/#organization` },
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "INR" },
                  shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
                  deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
                  },
                },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [{ "@type": "ListItem", position: 1, name: "Vantage (100ml)", item: `${SITE}/` }],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: VantageLanding,
});

const PRODUCT_DESCRIPTION =
  "Vantage is a 100ml unisex spiced woody parfum by Sarkar, with grapefruit and ginger on top, cardamom and violet leaf at the heart, and cedarwood, vetiver and ambergris in the base. 25% oil concentration, up to 8 hours on most skin.";

const glossary = [
  { term: "Ambergris", def: "A warm, salty-sweet base note. Used in modern perfumery to add depth and help a scent last on skin." },
  { term: "Vetiver", def: "The root of a tropical grass. Smoky, earthy and dry — a classic woody base note." },
  { term: "Violet leaf", def: "Green and slightly metallic, unlike the sweet violet flower. Adds a crisp, cool edge." },
  { term: "Cardamom", def: "A spice with a fresh, aromatic warmth that sits between citrus and wood." },
];

const notes = [
  {
    tier: "Top",
    items: "Grapefruit, Ginger",
    cue: "Sharp opening",
  },
  {
    tier: "Heart",
    items: "Cardamom, Violet Leaf",
    cue: "Composed centre",
  },
  {
    tier: "Base",
    items: "Cedarwood, Vetiver, Ambergris",
    cue: "Lasting edge",
  },
];

const about: { title: string; body: React.ReactNode }[] = [
  {
    title: "What it smells like",
    body: "Grapefruit and ginger open sharp. Cardamom and violet leaf hold the centre. Cedarwood, vetiver and ambergris stay close to the skin.",
  },
  {
    title: "Who it's for",
    body: "Anyone — it's unisex. Made for the ones who already have the edge: people who walk in already knowing the outcome.",
  },
  {
    title: "When to wear it",
    body: "Daily, or saved for the moments that count — negotiations, interviews, match point. Works in summer and winter.",
  },
  {
    title: "How to use it",
    body: "Spray on pulse points — neck and wrists — from a short distance. Start with two or three sprays; a parfum doesn't need more.",
  },
  {
    title: "What sets it apart",
    body: (
      <>
        According to{" "}
        <a href="https://ifrafragrance.org/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-foreground">
          IFRA guidelines
        </a>
        , a parfum typically contains 20–30% fragrance oil; Vantage is 25%. Lasting up to 8 hours on most skin. Spiced and woody without the sweetness — sharp, composed, built to last.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How long does Vantage last?",
    answer:
      "Vantage is a parfum with a 25% oil concentration. On most skin types it lasts up to 8 hours, depending on weather, application and your skin chemistry.",
  },
  {
    question: "What does Vantage smell like?",
    answer:
      "Sharp and composed. A grapefruit and ginger opening, a cardamom and violet leaf heart, and a cedarwood, vetiver and ambergris base that stays close to the skin.",
  },
  {
    question: "Can I wear Vantage every day?",
    answer:
      "Yes. It's sharp enough for moments that need an edge, easy enough for daily wear.",
  },
  {
    question: "Summer or winter?",
    answer:
      "Both. The citrus-ginger opening carries well in warm weather, while the woody base holds up through winter.",
  },
  {
    question: "When should I wear Vantage?",
    answer:
      "Negotiations, interviews, match point — any moment before the advantage is yours.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay}ms, transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AnnouncementBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-copper px-4 py-2.5 text-center text-xs font-medium text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        <span className="tracking-wide">
          Limited-time launch offer · Free shipping across India + 2 complimentary 7ml samples with every Vantage order
        </span>
        <button
          onClick={onClose}
          className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-foreground/10"
          aria-label="Close announcement"
        >
          <X className="h-3 w-3" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function VantageLanding() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const addedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current) clearTimeout(addedTimeoutRef.current);
    };
  }, []);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
    setAdded(true);
    if (addedTimeoutRef.current) clearTimeout(addedTimeoutRef.current);
    addedTimeoutRef.current = setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-copper selection:text-background">
      {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
      <header className={`fixed inset-x-0 z-40 border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300 ${showBanner ? "top-10" : "top-0"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" aria-label="Sarkar Vantage home" className="font-display text-lg tracking-[0.32em] uppercase">
            Sarkar
          </a>
          <nav aria-label="Page sections" className="hidden gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">Vantage</a>
            <a href="#notes" className="transition-colors hover:text-foreground">Fragrance notes</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            <a href="/about" className="transition-colors hover:text-foreground">About Sarkar</a>
            <a href="/reviews" className="transition-colors hover:text-foreground">Reviews</a>
            <a href="/contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <button
            className="relative flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-copper"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-copper text-[10px] font-medium text-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden pb-20 transition-all duration-300 md:pb-28 ${showBanner ? "pt-36 md:pt-44" : "pt-28 md:pt-36"}`}>
          <div className="veil pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="label-xs text-copper">Unisex Spiced Woody Parfum</p>
              <h1 className="mt-5 font-display text-6xl leading-[0.9] font-normal tracking-tight md:text-8xl lg:text-9xl">
                Vantage
                <span className="block text-2xl text-muted-foreground md:text-3xl md:leading-[1.2]">
                  (100ml)
                </span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
                Negotiations · Match point · The advantage
              </p>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-4xl font-normal">₹1,499</span>
                <span className="label-xs text-muted-foreground">Incl. of all taxes</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
              <Button
                  onClick={handleAddToCart}
                  className="h-12 px-10 bg-copper text-foreground font-sans text-sm font-medium tracking-[0.2em] uppercase hover:bg-copper-glow transition-colors"
                >
                  {added ? "Added" : "Add to Cart"}
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Secure checkout · Easy returns · Made in India · Authentic, sold direct by Sarkar
              </p>
              <ul aria-label="Why buy direct" className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <li>Free shipping across India</li>
                <li>2 complimentary 7ml samples</li>
                <li>Ships in 24–36 hours</li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="animate-drift relative mx-auto max-w-sm lg:max-w-md">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${bottleAvif640} 640w, ${bottleAvif960} 960w, ${bottleAvif1024} 1024w`}
                    sizes="(max-width: 1024px) 90vw, 448px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${bottleWebp640} 640w, ${bottleWebp960} 960w, ${bottleWebp1024} 1024w`}
                    sizes="(max-width: 1024px) 90vw, 448px"
                  />
                  <img
                    src={bottleJpg}
                    alt="Sarkar Vantage 100ml parfum bottle in deep dark green glass with a matching green cap"
                    width={1024}
                    height={1024}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-square w-full object-cover shadow-halo"
                  />
                </picture>
              </div>
            </div>

          </div>
        </section>

        {/* Sensory line */}
        <section className="border-t border-border py-20 md:py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Reveal>
              <p className="font-display text-3xl leading-snug text-balance md:text-5xl lg:text-6xl">
                It smells like ginger, cedarwood and the upper hand.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Notes pyramid */}
        <section id="notes" aria-labelledby="notes-title" className="scroll-mt-28 border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="mb-14 md:mb-20 md:flex md:items-end md:justify-between">
                <h2 id="notes-title" className="font-display text-4xl leading-none md:text-6xl">Fragrance Notes</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mt-0">
                  Built in three layers. Each one does a job, then steps aside.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {notes.map((note, i) => (
                <Reveal key={note.tier} delay={i * 120}>
                  <div className="flex h-full flex-col bg-background p-8 md:p-12">
                    <h3 className="label-xs text-copper">{note.tier} notes</h3>
                    <p className="mt-auto pt-16 font-display text-2xl leading-tight md:text-3xl">
                      {note.items}
                    </p>
                    <span className="mt-4 label-xs text-muted-foreground">{note.cue}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brand story */}
        <section className="relative overflow-hidden border-t border-border py-24 md:py-36">
          <div className="veil pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-balance md:text-4xl md:leading-snug">
                Vantage isn't about getting ahead. It's about already being there. Bottled for
                the second before the deal closes, the point is won, the room turns — when
                everyone else is still catching up, and you're already three moves past
                them.
              </p>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="scroll-mt-28 border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="about-title" className="font-display text-4xl leading-none md:text-5xl">About Vantage</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Vantage is a unisex spiced woody parfum by Sarkar, from the house behind Throne, Regal, Noble and Orion. 100ml, ₹1,499 incl. of all taxes.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Written by the <a href="/about" className="text-copper hover:text-foreground">Sarkar team</a>, founded by {FOUNDERS.map((f) => f.name).join(", ")}
              {" · "}Published <time dateTime={PAGE_PUBLISHED}>7 October 2026</time>
              {" · "}Last updated <time dateTime={PAGE_UPDATED}>9 October 2026</time>
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {about.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it's made + glossary */}
        <section id="made" aria-labelledby="made-title" className="scroll-mt-28 border-t border-border py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 id="made-title" className="font-display text-4xl leading-none md:text-5xl">How Vantage is made</h2>
              <ul className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li><strong className="text-foreground">Concentration.</strong> A parfum at 25% oil — the highest standard strength, which is why it lasts up to 8 hours.</li>
                <li><strong className="text-foreground">Development.</strong> Sarkar's range took nearly three years to develop before launch in August 2026.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-4xl leading-none md:text-5xl">Notes explained</h2>
              <dl className="mt-8 space-y-5 text-sm leading-relaxed md:text-base">
                {glossary.map((g) => (
                  <div key={g.term}>
                    <dt className="font-display text-xl text-foreground">{g.term}</dt>
                    <dd className="mt-1 text-muted-foreground">{g.def}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs text-muted-foreground">
                Sources:{" "}
                <a href="https://www.fragrantica.com/notes/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-foreground">Fragrantica note directory</a>
                {" · "}
                <a href="https://ifrafragrance.org/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-foreground">IFRA (International Fragrance Association)</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-28 border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 id="faq-title" className="mb-12 font-display text-4xl leading-none md:text-5xl">FAQ</h2>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question} className="border-border">
                    <AccordionTrigger className="py-5 text-left font-sans text-base font-medium text-foreground hover:no-underline hover:text-copper md:text-lg [&[data-state=open]>svg]:rotate-180">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent forceMount className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="font-display text-xl tracking-[0.28em] uppercase">Sarkar</p>
              <p className="mt-1 label-xs text-muted-foreground">The One & Only</p>
            </div>
            {SOCIALS.length > 0 && (
              <nav aria-label="Find us on" className="flex items-center gap-6 text-xs text-muted-foreground">
                <span className="label-xs">Find us on</span>
                {SOCIALS.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="me noopener noreferrer" className="transition-colors hover:text-copper">
                    {s.name}
                  </a>
                ))}
              </nav>
            )}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Sarkar. All rights reserved.
              </p>
              <ContactLine />
            </div>
            <SiteFooterLinks className="justify-center" />
          </div>
        </div>
      </footer>
    </div>
  );
}
