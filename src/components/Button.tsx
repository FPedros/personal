import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xir-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-xir-bg " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-gradient-to-r from-xir-silver/95 via-xir-text to-xir-silver/85 text-xir-bg shadow-glow " +
      "hover:from-xir-text hover:via-xir-silver hover:to-white/80 hover:-translate-y-0.5",
    secondary:
      "border border-xir-line bg-xir-panel text-xir-text hover:border-xir-accent hover:text-white " +
      "hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-xir-silver border border-transparent hover:border-xir-accent/60 hover:text-white"
  }[variant];

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
