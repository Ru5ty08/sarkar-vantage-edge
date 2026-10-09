import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => policyHead("/privacy", "Privacy Policy — Sarkar Vantage", "How the Sarkar Vantage site handles your information."),
  component: () => (
    <PolicyPage title="Privacy Policy">
      <p>This site does not use analytics, advertising trackers or third-party scripts.</p>
      <h2>What we collect</h2>
      <p>If you use the <a href="/contact">contact form</a>, we store your name, email and message so we can reply.</p>
      <p>If you <a href="/reviews">write a review</a>, we store your name, rating and review; approved reviews are shown publicly with your name.</p>
      <p>Items you add to the cart stay in your browser and are not sent to us.</p>
      <h2>Your rights</h2>
      <p>[DATA_REQUESTS_AND_RETENTION_POLICY]</p>
    </PolicyPage>
  ),
});
