import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";

export const Route = createFileRoute("/shipping-returns")({
  head: () =>
    policyHead("/shipping-returns", "Shipping & Returns — Sarkar Vantage", "Free shipping across India on Sarkar Vantage. Orders ship in 24–36 hours with 2 complimentary 7ml samples."),
  component: () => (
    <PolicyPage title="Shipping & Returns">
      <h2>Shipping</h2>
      <p>Shipping is free on every Vantage order across India.</p>
      <p>Orders ship within 24–36 hours.</p>
      <p>Every Vantage order includes 2 complimentary 7ml samples during the launch offer.</p>
      <h2>Returns</h2>
      <p>Full return terms will be published here before sales open.</p>
    </PolicyPage>
  ),
});
