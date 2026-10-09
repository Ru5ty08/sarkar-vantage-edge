import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PolicyPage, policyHead } from "@/components/PolicyPage";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => policyHead("/contact", "Contact Sarkar — Support for Vantage", "Contact Sarkar about orders, shipping or Vantage parfum."),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(2000),
});

export const fieldClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-copper";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Check the form");
    setError("");
    setStatus("sending");
    const { error: dbError } = await supabase.from("contact_messages").insert(parsed.data);
    if (dbError) {
      setStatus("idle");
      return setError("Couldn't send right now. Please try again.");
    }
    form.reset();
    setStatus("sent");
  }

  return (
    <PolicyPage title="Contact">
      <h2>Support details</h2>
      <ul className="space-y-2">
        <li>Email: {CONTACT.email ? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> : "[CONTACT_EMAIL]"}</li>
        <li>Phone / WhatsApp: {CONTACT.phone || "[PHONE_WHATSAPP]"}</li>
        <li>Address: {CONTACT.address || "[BUSINESS_ADDRESS]"}</li>
        <li>Support hours: {CONTACT.hours || "[SUPPORT_HOURS]"}</li>
      </ul>

      <h2>Send a message</h2>
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <label className="block text-sm text-foreground">
          Name
          <input name="name" autoComplete="name" maxLength={100} required className={fieldClass} />
        </label>
        <label className="block text-sm text-foreground">
          Email
          <input name="email" type="email" autoComplete="email" maxLength={255} required className={fieldClass} />
        </label>
        <label className="block text-sm text-foreground">
          Message
          <textarea name="message" rows={5} maxLength={2000} required className={fieldClass} />
        </label>
        <p role="status" aria-live="polite" className="text-sm">
          {error && <span className="text-destructive">{error}</span>}
          {status === "sent" && <span className="text-copper">Thanks — your message has been sent.</span>}
        </p>
        <Button type="submit" disabled={status === "sending"} className="h-12 bg-copper px-10 text-sm tracking-[0.2em] uppercase text-foreground hover:bg-copper-glow">
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </form>
    </PolicyPage>
  );
}
