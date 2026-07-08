import Section from "@/components/Section";
import Expandable from "@/components/Expandable";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col rounded-lg border border-border bg-card p-5">
            <p className="font-semibold">{project.name}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {(project.link || project.repo) && (
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.link && (
                  <a href={project.link} className="text-accent hover:underline">
                    Live demo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="text-accent hover:underline">
                    Source
                  </a>
                )}
              </div>
            )}

            <Expandable>
              <div className="space-y-5 border-t border-border pt-4">
                <p className="text-sm leading-relaxed text-muted">{project.writeup}</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.stackGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                        {group.label}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <ScreenshotPlaceholder label={project.name} />
              </div>
            </Expandable>
          </div>
        ))}
      </div>
    </Section>
  );
}
