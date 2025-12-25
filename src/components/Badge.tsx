import React from "react";

export function Badge({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border border-xir-line/80 bg-xir-bg/80 " +
        "px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-xir-silver " +
        className
      }
      {...props}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-xir-accent" />
      {props.children}
    </span>
  );
}
