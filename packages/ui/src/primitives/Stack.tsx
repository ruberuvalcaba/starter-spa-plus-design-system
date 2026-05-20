import * as stylex from "@stylexjs/stylex";
import type { HTMLAttributes } from "react";
import { space } from "../tokens/space.stylex";

const styles = stylex.create({
  base: { display: "flex", flexDirection: "column" },
  gapSm: { gap: space.sm },
  gapMd: { gap: space.md },
  gapLg: { gap: space.lg },
});

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
}

export function Stack({ gap = "md", ...rest }: StackProps) {
  const g =
    gap === "sm" ? styles.gapSm : gap === "lg" ? styles.gapLg : styles.gapMd;
  return <div {...rest} {...stylex.props(styles.base, g)} />;
}
