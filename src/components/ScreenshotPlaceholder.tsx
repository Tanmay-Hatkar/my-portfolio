export default function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-border bg-background">
      <span className="flex flex-col items-center gap-2 px-4 text-center text-xs text-muted">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5-5-4 4-3-3-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {label} — screenshot coming soon
      </span>
    </div>
  );
}
