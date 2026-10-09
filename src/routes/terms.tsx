import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => policyHead("/terms", "Terms of Service — Sarkar Vantage", "Terms for using the Sarkar Vantage site and ordering Vantage parfum."),
  component: () => (
    <PolicyPage title="Terms of Service">
      <p>Vantage (100ml) is priced at ₹1,499, inclusive of all taxes.</p>
      <p>The launch offer — free shipping across India and 2 complimentary 7ml samples — runs for a limited time.</p>
      <p>See <a href="/shipping-returns">Shipping & Returns</a> for delivery details.</p>
      <h2>Full terms</h2>
      <p>[TERMS_OF_SALE]</p>
    </PolicyPage>
  ),
});
