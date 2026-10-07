import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => policyHead("/privacy", "Privacy Policy — Sarkar Vantage", "How the Sarkar Vantage site handles your information."),
  component: () => (
    <PolicyPage title="Privacy Policy">
      <p>This site does not use analytics, advertising trackers or third-party scripts.</p>
      <p>Items you add to the cart stay in your browser and are not sent to us.</p>
      <p>The full privacy policy will be published here before sales open.</p>
    </PolicyPage>
  ),
});
