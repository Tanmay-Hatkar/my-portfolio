import Section from "@/components/Section";
import Expandable from "@/components/Expandable";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.title} className="rounded-lg border border-border bg-card p-5">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:text-accent hover:underline"
                >
                  {pub.title}
                </a>
              ) : (
                <p className="font-semibold">{pub.title}</p>
              )}
              <span className="whitespace-nowrap text-sm text-accent">{pub.venue}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{pub.description}</p>

            <Expandable>
              <div className="space-y-4 border-t border-border pt-4">
                <ul className="space-y-2 text-sm leading-relaxed text-muted">
                  {pub.keyPoints.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ScreenshotPlaceholder label={pub.title} />
              </div>
            </Expandable>
          </div>
        ))}
      </div>
    </Section>
  );
}
