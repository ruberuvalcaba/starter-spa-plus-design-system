import type { ReactNode } from "react";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
