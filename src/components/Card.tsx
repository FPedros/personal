import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "panel" | "glass" | "ghost";
};

export function Card({ className = "", variant = "panel", ...props }: Props) {
  const style =
    variant === "glass"
      ? "glass"
      : variant === "ghost"
      ? "border border-xir-line/60 bg-xir-bg/60"
      : "border border-xir-line bg-xir-panel/80 shadow-card";

  return <div className={`rounded-xl p-6 ${style} ${className}`} {...props} />;
}
