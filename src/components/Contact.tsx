import Section from "@/components/Section";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-xl leading-relaxed text-muted">
        I&apos;m always open to discussing new opportunities, collaborations, or interesting problems in ML and AI. Feel free to reach out.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {personal.email}
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          LinkedIn
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}
