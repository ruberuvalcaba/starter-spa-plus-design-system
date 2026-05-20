import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens/colors.stylex";
import { fontSize, fonts } from "../../tokens/typography.stylex";
import { radius } from "../../tokens/radius.stylex";
import { space } from "../../tokens/space.stylex";

export const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: space.sm,
    fontFamily: fonts.sans,
    fontWeight: 600,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: radius.md,
    cursor: "pointer",
    transitionProperty: "background-color, color, border-color",
    transitionDuration: "120ms",
    userSelect: "none",
  },

  sm: {
    fontSize: fontSize.sm,
    paddingBlock: space.xs,
    paddingInline: space.md,
  },

  md: {
    fontSize: fontSize.md,
    paddingBlock: space.sm,
    paddingInline: space.lg,
  },

  lg: {
    fontSize: fontSize.lg,
    paddingBlock: space.md,
    paddingInline: space.xl,
  },

  primary: {
    backgroundColor: colors.primary,
    color: colors.primaryFg,
    borderColor: colors.primary,

    ":hover": {
      backgroundColor: colors.primaryHover,
    },
  },

  secondary: {
    backgroundColor: colors.bg,
    color: colors.fg,
    borderColor: colors.border,
  },

  ghost: {
    backgroundColor: "transparent",
    color: colors.fg,
    borderColor: "transparent",
  },
});
