import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
