"use client";

import { useState, type ReactNode } from "react";

export default function Expandable({
  children,
  labelOpen = "Show less",
  labelClosed = "Show more",
}: {
  children: ReactNode;
  labelOpen?: string;
  labelClosed?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        {open ? labelOpen : labelClosed}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </>
  );
}
