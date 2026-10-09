import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";
import { FOUNDERS, ORGANIZATION_LD } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  head: () =>
    policyHead(
      "/about",
      "About Sarkar — The house behind Vantage",
      "Sarkar is a premium unisex fragrance house from India, co-founded by Bhuvan Bam, Neel Gogia, Rohit Raj and Jag Chima, launched in August 2026.",
      { "@graph": [ORGANIZATION_LD, { "@type": "AboutPage", name: "About Sarkar", about: { "@id": ORGANIZATION_LD["@id"] } }] },
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PolicyPage title="About Sarkar">
      <p className="text-lg text-foreground">
        Sarkar is a premium unisex fragrance house from India — the house behind Throne, Regal, Noble, Orion and Vantage.
      </p>
      <p>
        Sarkar launched in August 2026 after nearly three years of development. The aim: close the gap between mass-market body sprays and luxury niche perfumes.
      </p>

      <h2>The founders</h2>
      <ul className="space-y-4">
        {FOUNDERS.map((f) => (
          <li key={f.name}>
            <h3>{f.name}</h3>
            <p>{f.bio}</p>
          </li>
        ))}
      </ul>

      <h2>Our perfumer</h2>
      <p>[PERFUMER_NAME] — [PERFUMER_EXPERIENCE_AND_TRAINING]. Brands and fragrances created: [PERFUMER_PORTFOLIO].</p>

      <h2>How the fragrances are made</h2>
      <p>Vantage is a parfum at 25% oil concentration, lasting up to 8 hours on most skin.</p>
      <p>[INGREDIENT_SOURCING_AND_BATCH_TESTING]</p>
      <p>Based in [CITY], India.</p>

      <p>
        Read more about <a href="/">Vantage, our spiced woody parfum</a>, or <a href="/contact">get in touch</a>.
      </p>
    </PolicyPage>
  );
}
