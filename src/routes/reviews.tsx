import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PolicyPage, policyHead } from "@/components/PolicyPage";
import { Button } from "@/components/ui/button";
import { fieldClass } from "./contact";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(60),
  rating: z.coerce.number().int().min(1, "Pick a rating").max(5),
  body: z.string().trim().min(10, "Write at least 10 characters").max(1500),
});

export const Route = createFileRoute("/reviews")({
  loader: async () => {
    const { data } = await supabase
      .from("reviews")
      .select("id,name,rating,body,created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    return { reviews: data ?? [] };
  },
  head: () => policyHead("/reviews", "Vantage Reviews — Sarkar", "Customer reviews of Vantage, the unisex spiced woody parfum by Sarkar."),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { reviews } = Route.useLoaderData();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Check the form");
    setError("");
    setSending(true);
    const { error: dbError } = await supabase.from("reviews").insert(parsed.data);
    setSending(false);
    if (dbError) return setError("Couldn't submit right now. Please try again.");
    form.reset();
    setSent(true);
  }

  return (
    <PolicyPage title="Vantage Reviews">
      <h2>What customers say</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Tried <a href="/">Vantage</a>? Be the first.</p>
      ) : (
        <ul className="space-y-8">
          {reviews.map((r) => (
            <li key={r.id} className="border-b border-border pb-6">
              <p className="text-copper" aria-label={`${r.rating} out of 5`}>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
              <p className="mt-2 text-foreground">{r.body}</p>
              <p className="mt-2 text-xs">
                {r.name} · <time dateTime={r.created_at}>{new Date(r.created_at).toLocaleDateString("en-IN", { dateStyle: "medium" })}</time>
              </p>
            </li>
          ))}
        </ul>
      )}

      <h2>Write a review</h2>
      <p className="text-sm">Reviews appear once approved.</p>
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <label className="block text-sm text-foreground">
          Name
          <input name="name" maxLength={60} required className={fieldClass} />
        </label>
        <label className="block text-sm text-foreground">
          Rating
          <select name="rating" defaultValue="" required className={fieldClass}>
            <option value="" disabled>Choose…</option>
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} out of 5</option>)}
          </select>
        </label>
        <label className="block text-sm text-foreground">
          Your review
          <textarea name="body" rows={5} maxLength={1500} required className={fieldClass} />
        </label>
        <p role="status" aria-live="polite" className="text-sm">
          {error && <span className="text-destructive">{error}</span>}
          {sent && <span className="text-copper">Thanks — your review will appear once approved.</span>}
        </p>
        <Button type="submit" disabled={sending} className="h-12 bg-copper px-10 text-sm tracking-[0.2em] uppercase text-foreground hover:bg-copper-glow">
          {sending ? "Submitting…" : "Submit review"}
        </Button>
      </form>
    </PolicyPage>
  );
}
