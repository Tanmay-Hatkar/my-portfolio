import { personal } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-card hover:text-foreground"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-card hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-card hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
