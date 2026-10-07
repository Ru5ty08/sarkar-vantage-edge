import type { ReactNode } from "react";

export const SITE = "https://sarkar-vantage-edge.lovable.app";

export function policyHead(path: string, title: string, description: string) {
  const url = `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <a href="/" className="font-display text-lg tracking-[0.32em] uppercase">Sarkar</a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="label-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Vantage (100ml)</a> / <span>{title}</span>
        </nav>
        <h1 className="mt-6 font-display text-4xl md:text-6xl">{title}</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground">
          {children}
        </div>
        <p className="mt-14">
          <a href="/" className="text-copper hover:text-foreground">← Back to Vantage parfum</a>
        </p>
      </main>
      <footer className="border-t border-border py-10">
        <nav aria-label="Legal" className="mx-auto flex max-w-3xl flex-wrap gap-6 px-6 text-xs text-muted-foreground">
          <a href="/shipping" className="hover:text-foreground">Shipping & Returns</a>
          <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
          <a href="/terms" className="hover:text-foreground">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}
