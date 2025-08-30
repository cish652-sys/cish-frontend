import { TypographyVariant, TypographyRobotCondensedSize, FontWeight } from "./interface";

export const getFontFamily = (variant: TypographyVariant) => {
  switch (variant) {
    case "regular":
      return "font-inter";
    case "condensed":
      return "font-poppins";
    default:
      return "";
  }
};

export const getFontSize = (size?: TypographyRobotCondensedSize) => {
  switch (size) {
    case "h1":
      return "text-4xl";
    case "h2":
      return "text-3xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-xl";
    case "h5":
      return "text-lg";
    case "h6":
      return "text-base";
    case "paragraph":
      return "text-sm";
    default:
      return "";
  }
};

export const getFontWeight = (weight?: FontWeight) => {
  switch (weight) {
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "700":
      return "font-bold";
    case "600":
      return "font-semibold";
    case "500":
      return "font-medium";
    case "400":
      return "font-normal";
    default:
      return "";
  }
};

// ✅ Variant mapping
export const getVariantStyle = (variant?: TypographyVariant) => {
  switch (variant) {
    case "bodySmall":
      return { className: "font-bold", style: { fontSize: "16px" } };
    case "bodyLarge":
      return { className: "font-semibold", style: { fontSize: "20px" } };
    default:
      return { className: "", style: {} };
  }
};
