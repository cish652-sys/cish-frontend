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

export const getVariantStyle = (variant?: TypographyVariant) => {
  const baseStyle = {
    fontFamily: "Noto Sans",
    fontWeight: 700,
    lineHeight: "157%",
    letterSpacing: "0%",
    textTransform: "uppercase" as const,
    color: "#1B5E20",
  };

  switch (variant) {
    // ✅ 1. Heading Small (16px, 100% line-height)
    case "headingSmall":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };
    case "cardHeading":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "13px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };
    // ✅ 2. Heading Large (25px, 157% line-height)
    case "headingLarge":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "25px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };

    // ✅ 3. Inter Italic Highlight
    case "italicHighlight":
      return {
        className: "",
        style: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontStyle: "italic",
          fontSize: "18px",
          lineHeight: "160%",
          letterSpacing: "0.5px",
          textAlign: "center" as const,
          color: "#6F7E70",
        },
      };

    // ✅ 4. Section Heading (22px)
    case "sectionHeading":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "22px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };

    // ✅ 5. Card Title (18px)
    case "cardTitle":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "18px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };

    // ✅ 6. Paragraph Small (12px, capitalize)
    case "paragraphSmall":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "capitalize" as const,
          color: "#4F5850",
        },
      };

    // ✅ 7. SubHeading Gray (19px)
    case "subHeadingGray":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "19px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#6F7E70",
        },
      };

    // ✅ 8. Content Title (20px)
    case "contentTitle":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };

    // ✅ 9. Badge Style (12px, dark green)
    case "badgeStyle":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#2D5631",
        },
      };

    // ✅ 10. Label Small (9px, capitalize, gray)
    case "labelSmall":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "9px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "capitalize" as const,
          color: "#4F5850",
        },
      };

    // ✅ 11. Label Tiny (10px, uppercase, green)
    case "labelTiny":
      return {
        className: "",
        style: {
          fontFamily: "Noto Sans",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "10px",
          lineHeight: "157%",
          letterSpacing: "0%",
          textTransform: "uppercase" as const,
          color: "#1B5E20",
        },
      };

    // 🔥 default fallback
    default:
      return { className: "", style: baseStyle };
  }
};
