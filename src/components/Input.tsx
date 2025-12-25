import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-lg bg-xir-bg/80 border border-xir-line px-3 py-2.5 text-sm " +
        "text-xir-text placeholder:text-xir-muted sheen " +
        "focus:border-xir-accent focus:ring-2 focus:ring-xir-accent/25 outline-none transition ease-expo-out"
      }
    />
  );
}
