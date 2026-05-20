import * as stylex from "@stylexjs/stylex";
import { forwardRef, type InputHTMLAttributes } from "react";
import { styles } from "./Input.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <input ref={ref} {...props} {...stylex.props(styles.base)} />;
});
