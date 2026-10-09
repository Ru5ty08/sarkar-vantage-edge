// Single source of truth for brand facts used across pages, JSON-LD and llms files.
// Empty strings mean "not provided yet" — UI and schema skip them.
export const SITE = "https://sarkar-vantage-edge.lovable.app";

export const FOUNDERS = [
  { name: "Bhuvan Bam", bio: "Actor, content creator and co-founder of BBKV Productions." },
  { name: "Neel Gogia", bio: "Co-founder of IPLIX Media and Layers." },
  { name: "Rohit Raj", bio: "Manager of Bhuvan Bam and co-founder of BBKV Productions." },
  { name: "Jag Chima", bio: "Co-founder of IPLIX Media." },
];

export const CONTACT = {
  email: "", // [CONTACT_EMAIL]
  phone: "", // [PHONE_WHATSAPP]
  address: "", // [BUSINESS_ADDRESS]
  hours: "", // [SUPPORT_HOURS]
};

// Add real profile URLs; empty ones are hidden everywhere.
export const SOCIALS: { name: string; url: string }[] = [
  { name: "Instagram", url: "" },
  { name: "X (Twitter)", url: "" },
  { name: "YouTube", url: "" },
  { name: "LinkedIn", url: "" },
  { name: "Facebook", url: "" },
].filter((s) => s.url);

export const PAGE_PUBLISHED = "2026-10-07";
export const PAGE_UPDATED = "2026-10-09";

export const SITE_LINKS = [
  { href: "/about", label: "About Sarkar" },
  { href: "/reviews", label: "Reviews" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export const ORGANIZATION_LD = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Sarkar",
  url: `${SITE}/`,
  slogan: "The One & Only",
  description:
    "Sarkar is a premium unisex fragrance house from India, launched in August 2026 to bridge the gap between mass-market body sprays and luxury niche perfumes.",
  foundingDate: "2026-08",
  foundingLocation: { "@type": "Country", name: "India" },
  founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, description: f.bio })),
  ...(CONTACT.email || CONTACT.phone
    ? {
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          areaServed: "IN",
          ...(CONTACT.email && { email: CONTACT.email }),
          ...(CONTACT.phone && { telephone: CONTACT.phone }),
        },
      }
    : {}),
  ...(SOCIALS.length ? { sameAs: SOCIALS.map((s) => s.url) } : {}),
};
