import { personal } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{personal.name}</h1>
      <h2 className="mt-3 text-xl font-medium text-muted sm:text-2xl">{personal.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {personal.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          Download resume
        </a>

        <div className="ml-1 flex items-center gap-1">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
