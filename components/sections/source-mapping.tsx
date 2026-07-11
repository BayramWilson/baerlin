import { sectionSources } from "@/lib/source-data";

export function SourceMapping() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold text-[var(--color-primary)]">
          Content-Mapping
        </h2>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {sectionSources.map((item) => (
            <div className="rounded-lg border border-[var(--color-border)] p-3" key={item.section}>
              <dt className="font-bold">{item.section}</dt>
              <dd className="mt-1 text-[var(--color-muted-foreground)]">{item.source}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
