import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL kept working after the page moved to /shipping-returns.
export const Route = createFileRoute("/shipping")({
  beforeLoad: () => {
    throw redirect({ to: "/shipping-returns", statusCode: 301 });
  },
});
