import Section from "@/components/Section";
import { personal } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import GitHubActivityGraph from "@/components/GitHubActivityGraph";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-xl leading-relaxed text-muted">
        I&apos;m always open to discussing new opportunities, collaborations, or interesting problems in ML and AI. Feel free to reach out.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <MailIcon className="h-4 w-4" />
          {personal.email}
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>

      <div className="mt-8 rounded-lg border border-border bg-card p-5">
        <p className="text-sm font-medium">GitHub activity</p>
        <GitHubActivityGraph />
      </div>
    </Section>
  );
}
