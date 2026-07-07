import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{personal.name}</h1>
      <h2 className="mt-3 text-xl font-medium text-muted sm:text-2xl">{personal.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {personal.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          View projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
