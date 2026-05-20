import * as stylex from "@stylexjs/stylex";

export const fonts = stylex.defineVars({
  sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
});

export const fontSize = stylex.defineVars({
  sm: "13px",
  md: "14px",
  lg: "16px",
  xl: "20px",
  xxl: "28px",
});
