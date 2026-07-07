import Section from "@/components/Section";
import { education, personal } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl leading-relaxed text-muted">{personal.summary}</p>

      <div className="mt-8 space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex flex-col justify-between gap-1 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-start"
          >
            <div>
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-muted">
                {edu.school} · {edu.location}
              </p>
              <p className="mt-2 text-sm text-muted">{edu.detail}</p>
            </div>
            <p className="whitespace-nowrap text-sm text-muted">
              {edu.start} – {edu.end}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
