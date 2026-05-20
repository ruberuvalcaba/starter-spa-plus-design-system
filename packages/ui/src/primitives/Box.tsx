import * as stylex from "@stylexjs/stylex";
import type { HTMLAttributes } from "react";

const styles = stylex.create({
  base: { display: "block", boxSizing: "border-box" },
});

export function Box(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} {...stylex.props(styles.base)} />;
}
