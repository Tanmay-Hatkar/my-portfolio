import Section from "@/components/Section";
import Expandable from "@/components/Expandable";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`} className="relative border-l border-border pl-6">
            <div className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <p className="font-semibold">
                {job.role} · <span className="text-muted">{job.company}</span>
              </p>
              <p className="whitespace-nowrap text-sm text-muted">
                {job.start} – {job.end}
              </p>
            </div>
            <p className="text-sm text-muted">{job.location}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Expandable>
              <div className="flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Expandable>
          </div>
        ))}
      </div>
    </Section>
  );
}
