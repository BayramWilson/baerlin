import { Icon } from "@/components/ui/icon";

const usps = [
  {
    title: "Kostenlose Diagnose",
    text: "Unverbindlicher Kostenvoranschlag nach Prüfung.",
    icon: "check" as const,
  },
  {
    title: "Kostenlose Abholung",
    text: "Für Kaffeevollautomaten nach Terminvereinbarung.",
    icon: "truck" as const,
  },
  {
    title: "Abgabe ohne Termin",
    text: "Selbstanlieferung im Fachgeschäft Alt-Moabit 120.",
    icon: "map" as const,
  },
];

export function UspBar() {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:px-6 md:grid-cols-3 lg:px-8">
        {usps.map((usp) => (
          <div className="flex gap-4 py-4 md:px-5" key={usp.title}>
            <Icon name={usp.icon} className="mt-1 h-6 w-6 shrink-0 text-[#F3E4C8]" />
            <div>
              <h2 className="text-base font-bold">{usp.title}</h2>
              <p className="mt-1 text-sm leading-6 text-[#FDF6EC]">{usp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
