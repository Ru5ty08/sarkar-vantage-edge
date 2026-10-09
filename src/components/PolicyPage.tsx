import type { ReactNode } from "react";
import { SITE, SITE_LINKS, CONTACT } from "@/lib/brand";

export { SITE };

export function policyHead(path: string, title: string, description: string, extraLd?: object) {
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
    ...(extraLd
      ? { scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...extraLd }) }] }
      : {}),
  };
}

export function SiteFooterLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Site" className={`flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground ${className}`}>
      {SITE_LINKS.map((l) => (
        <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export function ContactLine() {
  if (!CONTACT.email && !CONTACT.phone) return null;
  return (
    <p className="text-xs text-muted-foreground">
      {CONTACT.email && <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">{CONTACT.email}</a>}
      {CONTACT.email && CONTACT.phone && " · "}
      {CONTACT.phone && <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-foreground">{CONTACT.phone}</a>}
    </p>
  );
}

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <a href="/" className="font-display text-lg tracking-[0.32em] uppercase">Sarkar</a>
          <a href="/" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground">Vantage</a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="label-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Vantage (100ml)</a> / <span>{title}</span>
        </nav>
        <h1 className="mt-6 font-display text-4xl md:text-6xl">{title}</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground [&_a]:text-copper [&_a:hover]:text-foreground [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground">
          {children}
        </div>
        <p className="mt-14">
          <a href="/" className="text-copper hover:text-foreground">← Back to Vantage parfum</a>
        </p>
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          <SiteFooterLinks />
          <ContactLine />
        </div>
      </footer>
    </div>
  );
}
