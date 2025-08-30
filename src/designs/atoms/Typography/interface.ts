import type { PropsWithChildren } from "react";

export type TypographyRobotCondensedSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph";

export type TypographyVariant =
  | "regular"
  | "condensed"
  | "bodySmall" // ✅ new custom variant
  | "bodyLarge" // ✅ example future extend
  | "bodyInterItalic"
  | "paragraphVariant";

export type FontWeight = "normal" | "medium" | "semibold" | "bold" | "700" | "600" | "500" | "400";

export interface TypographyProps extends PropsWithChildren {
  variant?: TypographyVariant;
  size?: TypographyRobotCondensedSize;
  weight?: FontWeight;
  customSize?: string;
  className?: string;
  tabIndex?: number;
}
