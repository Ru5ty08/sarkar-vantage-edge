import { createFileRoute } from "@tanstack/react-router";

import bottle from "@/assets/vantage-bottle.jpg";
import chess from "@/assets/vantage-chess.jpg";
import notes from "@/assets/vantage-notes.jpg";
import packaging from "@/assets/vantage-packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Vantage — For the ones who already have the edge" },
      {
        name: "description",
        content:
          "Vantage by Sarkar. Bottled for the second before the deal closes, the point is won, the room turns. A parfum for those already three moves ahead.",
      },
      { property: "og:title", content: "Sarkar Vantage — Already three moves ahead" },
      {
        property: "og:description",
        content:
          "Vantage isn't about getting ahead. It's about already being there. A 25% concentration parfum from Sarkar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VantageLanding,
});

const moves = [
  {
    index: "01",
    title: "The Pause",
    body: "The half-second of stillness before the room shifts. Cold bergamot and green cardamom clear the air around you.",
  },
  {
    index: "02",
    title: "The Turn",
    body: "Black pepper over vetiver. The moment they realise the ground moved and it wasn't under you.",
  },
  {
    index: "03",
    title: "The Close",
    body: "Leather, oud and amberwood settle in and stay. The scent of a thing already decided.",
  },
];

const composition = [
  { tier: "Top", note: "Bergamot, Green Cardamom", cue: "Cold / Precise" },
  { tier: "Heart", note: "Black Pepper, Vetiver, Iris", cue: "Kinetic / Dry" },
  { tier: "Base", note: "Oud, Leather, Amberwood", cue: "Enduring / Deep" },
];

function VantageLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="font-display text-lg font-bold tracking-[0.42em] uppercase">
            Sarkar
          </span>
          <nav className="hidden gap-10 label-xs text-muted-foreground md:flex">
            <a href="#philosophy" className="transition-colors hover:text-edge">
              Philosophy
            </a>
            <a href="#composition" className="transition-colors hover:text-edge">
              Composition
            </a>
            <a href="#ritual" className="transition-colors hover:text-edge">
              Ritual
            </a>
          </nav>
          <a
            href="#acquire"
            className="border border-edge/40 px-4 py-2 label-xs text-edge transition-colors hover:bg-edge hover:text-primary-foreground"
          >
            Buy Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="veil pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="label-xs text-edge">Sarkar · Parfum · 100ml</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.86] font-extrabold tracking-tight uppercase md:text-8xl">
              Vantage
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              For the ones who already have the edge. Vantage isn't about getting ahead —
              it's about already being there.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 label-xs text-muted-foreground">
              <span className="border border-border px-3 py-1.5">Unisex</span>
              <span className="border border-border px-3 py-1.5">Sharp Green</span>
              <span className="border border-border px-3 py-1.5">25% Parfum</span>
            </div>
            <div className="mt-12 flex items-baseline gap-4">
              <span className="font-display text-3xl font-bold">₹ 2,499</span>
              <span className="label-xs text-muted-foreground">Incl. of all taxes</span>
            </div>
            <a
              href="#acquire"
              className="mt-8 inline-flex bg-foreground px-10 py-4 font-display text-sm font-bold tracking-[0.3em] text-ink uppercase transition-colors hover:bg-edge"
            >
              Add To Cart
            </a>
          </div>

          <div className="animate-drift relative">
            <img
              src={bottle}
              alt="Sarkar Vantage parfum bottle sculpted as an emerald glass chess knight"
              width={1200}
              height={1504}
              className="mx-auto w-full max-w-md object-cover shadow-halo"
            />
          </div>
        </div>
      </section>

      <section id="philosophy" className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="label-xs text-muted-foreground">The Philosophy</p>
              <h2 className="mt-5 font-display text-5xl leading-none font-extrabold tracking-tight uppercase md:text-7xl">
                Three moves
                <br />
                <span className="text-edge">past them</span>
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-muted-foreground md:col-span-5">
              Bottled for the second before the deal closes, the point is won, the room
              turns. When everyone else is still catching up.
            </p>
          </div>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
            {moves.map((move) => (
              <div key={move.index} className="flex min-h-80 flex-col bg-background p-10">
                <span className="label-xs mb-auto text-edge">({move.index})</span>
                <h3 className="font-display text-2xl font-extrabold uppercase">
                  {move.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {move.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="relative">
          <img
            src={chess}
            alt="A hand in a dark suit moving a knight across a chessboard in low light"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-[70vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <blockquote className="absolute inset-0 flex items-center justify-center px-6">
            <p className="max-w-2xl text-center font-display text-3xl leading-tight font-extrabold tracking-tight uppercase md:text-5xl">
              The strongest player in the room is the one who has already finished the
              game.
            </p>
          </blockquote>
        </div>
      </section>

      <section id="composition" className="border-t border-border py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <img
            src={notes}
            alt="Bergamot, green cardamom, black pepper, vetiver root and cedar on dark stone"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-square w-full object-cover"
          />
          <div>
            <p className="label-xs text-edge">Olfactive Structure</p>
            <h2 className="mt-5 font-display text-4xl leading-none font-extrabold tracking-tight uppercase md:text-5xl">
              Cold green,
              <br />
              dark finish
            </h2>
            <div className="mt-12 space-y-8">
              {composition.map((row) => (
                <div key={row.tier} className="group">
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-display text-xl font-extrabold uppercase">
                      {row.tier} Notes
                    </span>
                    <span className="label-xs text-muted-foreground">{row.cue}</span>
                  </div>
                  <div className="h-px bg-border transition-colors group-hover:bg-edge" />
                  <p className="mt-3 text-sm text-muted-foreground">{row.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="label-xs text-muted-foreground">Longevity</p>
                <p className="mt-2 font-display text-lg font-bold">Up to 10 hours</p>
              </div>
              <div>
                <p className="label-xs text-muted-foreground">Projection</p>
                <p className="mt-2 font-display text-lg font-bold">Controlled aura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ritual" className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <img
              src={packaging}
              alt="Sarkar Vantage bottle resting on dark stone beside its matte case"
              loading="lazy"
              width={1600}
              height={1008}
              className="w-full object-cover"
            />
            <div>
              <p className="label-xs text-edge">The Ritual</p>
              <h2 className="mt-5 font-display text-4xl leading-none font-extrabold tracking-tight uppercase md:text-5xl">
                Wear it before
                <br />
                you need it
              </h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                Two presses at the pulse points, 15–20 cm from the skin. Neck, wrists, the
                inside of the collar. Apply on the way in, never in the room.
              </p>
              <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-4 border-b border-border pb-4">
                  <span className="label-xs text-edge">Wear</span>
                  <span>Boardrooms · Match points · Late negotiations</span>
                </li>
                <li className="flex gap-4 border-b border-border pb-4">
                  <span className="label-xs text-edge">Season</span>
                  <span>All year, sharpest in cold air</span>
                </li>
                <li className="flex gap-4">
                  <span className="label-xs text-edge">Made</span>
                  <span>Blended and bottled in India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="acquire" className="relative overflow-hidden border-t border-border py-32">
        <div className="veil pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="label-xs text-muted-foreground">Vantage · 100ml Parfum</p>
          <h2 className="mt-6 font-display text-5xl leading-none font-extrabold tracking-tight uppercase md:text-7xl">
            Take the
            <br />
            <span className="text-edge">Vantage</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md leading-relaxed text-muted-foreground">
            Ships within 24–36 hours. Two 7ml freebies with every order.
          </p>
          <a
            href="#acquire"
            className="mt-10 inline-flex bg-foreground px-12 py-5 font-display text-sm font-bold tracking-[0.3em] text-ink uppercase transition-colors hover:bg-edge"
          >
            Add To Cart — ₹ 2,499
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <span className="font-display text-sm font-bold tracking-[0.42em] uppercase">
            Sarkar
          </span>
          <p className="label-xs text-muted-foreground">
            © 2026 Sarkar Vantage · Made in India
          </p>
        </div>
      </footer>
    </div>
  );
}
