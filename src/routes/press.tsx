import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, policyHead } from "@/components/PolicyPage";

// Add real coverage here: { outlet, title, url, date }.
const PRESS: { outlet: string; title: string; url: string; date: string }[] = [];

export const Route = createFileRoute("/press")({
  head: () => policyHead("/press", "Press & Media — Sarkar", "Press coverage and media enquiries for Sarkar and Vantage parfum."),
  component: () => (
    <PolicyPage title="Press & Media">
      <h2>As seen in</h2>
      {PRESS.length === 0 ? (
        <p>Coverage will be listed here as it's published.</p>
      ) : (
        <ul className="space-y-4">
          {PRESS.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.outlet}: {p.title}</a>{" "}
              <time dateTime={p.date}>{p.date}</time>
            </li>
          ))}
        </ul>
      )}
      <h2>Media enquiries</h2>
      <p>For interviews, samples or brand assets, use the <a href="/contact">contact page</a>.</p>
      <p>Background on the brand and founders is on <a href="/about">About Sarkar</a>.</p>
    </PolicyPage>
  ),
});
