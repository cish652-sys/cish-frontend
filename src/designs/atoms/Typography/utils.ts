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
  const baseStyle = {
    fontFamily: "Noto Sans",
    fontWeight: 700,
    lineHeight: "157%",
    letterSpacing: "0%",
    textTransform: "uppercase" as const,
    color: "#1B5E20", // ✅ default text color
  };

  switch (variant) {
    case "bodySmall":
      return { className: "", style: { ...baseStyle, fontSize: "16px" } };

    case "bodyLarge":
      return { className: "", style: { ...baseStyle, fontSize: "20px" } };

    case "bodyInterItalic":
      return {
        className: "",
        style: {
          fontFamily: "Inter",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "13px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textAlign: "center" as const,
          textTransform: "uppercase" as const,
          color: "#6F7E70", // ✅ different text color
        },
      };

    // 🔥 naya variant: paragraphVariant
    case "paragraphVariant":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "capitalize" as const,
          color: "#4F5850",
        },
      };

    default:
      return { className: "", style: baseStyle };
  }
};
