import Section from "@/components/Section";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.title} className="rounded-lg border border-border bg-card p-5">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <p className="font-semibold">{pub.title}</p>
              <span className="whitespace-nowrap text-sm text-accent">{pub.venue}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{pub.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
