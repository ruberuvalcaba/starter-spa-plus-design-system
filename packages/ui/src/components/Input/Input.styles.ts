import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens/colors.stylex";
import { fontSize, fonts } from "../../tokens/typography.stylex";
import { radius } from "../../tokens/radius.stylex";
import { space } from "../../tokens/space.stylex";

export const styles = stylex.create({
  base: {
    fontFamily: fonts.sans,
    fontSize: fontSize.md,
    color: colors.fg,
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: { default: colors.border, ":focus": colors.primary },
    borderRadius: radius.md,
    paddingBlock: space.sm,
    paddingInline: space.md,
    outline: "none",
    width: "100%",
  },
});
