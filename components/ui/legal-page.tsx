import Link from "next/link";

export function LegalPage({ title, text }: { title: string; text: string }) {
  return (
    <main className="section-pad">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link className="font-bold text-[var(--color-accent)]" href="/">
          Zur Startseite
        </Link>
        <h1 className="mt-8 font-display text-4xl text-[var(--color-primary)]">{title}</h1>
        <pre className="mt-8 whitespace-pre-wrap rounded-lg border border-[var(--color-border)] bg-white p-5 font-sans text-sm leading-7 text-[var(--color-foreground)] shadow-sm">
          {text}
        </pre>
      </article>
    </main>
  );
}
