import * as stylex from "@stylexjs/stylex";
import type { ButtonHTMLAttributes } from "react";
import { styles } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      {...stylex.props(styles.base, styles.size[size], styles.variant[variant])}
    />
  );
}
