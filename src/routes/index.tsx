import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, Instagram, Twitter, Youtube } from "lucide-react";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VantageLanding,
});

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

function VantageLanding() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-copper selection:text-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" className="font-display text-lg tracking-[0.32em] uppercase">
            Sarkar
          </a>
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
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
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
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span>Free shipping</span>
                <span className="hidden text-border sm:inline">|</span>
                <span>2 complimentary 7ml samples</span>
                <span className="hidden text-border sm:inline">|</span>
                <span>Ships in 24–36 hours</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="animate-drift relative mx-auto max-w-sm lg:max-w-md">
                <img
                  src={bottle}
                  alt="Sarkar Vantage 100ml parfum bottle in deep dark green glass with a matching green cap"
                  width={1024}
                  height={1280}
                  className="w-full object-cover shadow-halo"
                  
                />
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
        <section className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="mb-14 md:mb-20 md:flex md:items-end md:justify-between">
                <h2 className="font-display text-4xl leading-none md:text-6xl">Notes</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mt-0">
                  Built in three layers. Each one does a job, then steps aside.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {notes.map((note, i) => (
                <Reveal key={note.tier} delay={i * 120}>
                  <div className="flex h-full flex-col bg-background p-8 md:p-12">
                    <span className="label-xs text-copper">{note.tier}</span>
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

        {/* FAQ */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="mb-12 font-display text-4xl leading-none md:text-5xl">FAQ</h2>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question} className="border-border">
                    <AccordionTrigger className="py-5 text-left font-sans text-base font-medium text-foreground hover:no-underline hover:text-copper md:text-lg [&[data-state=open]>svg]:rotate-180">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
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
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-copper"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-copper"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-copper"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sarkar. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
