import { personal } from "@/lib/data";

export default async function GitHubActivityGraph() {
  let svg: string | null = null;

  try {
    const res = await fetch(`https://ghchart.rshah.org/fb923c/${personal.githubUsername}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      svg = (await res.text())
        .replaceAll("#EEEEEE", "#292524")
        .replaceAll("#767676", "#a3a3a3");

      const dims = svg.match(/<svg[^>]*width="(\d+)"[^>]*height="(\d+)"[^>]*>/);
      if (dims) {
        const [openTag, width, height] = dims;
        svg = svg.replace(openTag, openTag.replace(">", ` viewBox="0 0 ${width} ${height}">`));
      }
    }
  } catch {
    svg = null;
  }

  if (!svg) return null;

  return (
    <div
      role="img"
      aria-label={`${personal.name}'s GitHub contribution graph`}
      className="mt-3 w-full [&_svg]:h-auto [&_svg]:w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
