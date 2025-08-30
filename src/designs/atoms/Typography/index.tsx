import React from "react";
import { TypographyProps } from "./interface";
import { getFontFamily, getFontSize, getFontWeight, getVariantStyle } from "./utils";

const Typography: React.FC<TypographyProps> = ({
  variant = "regular",
  size,
  weight,
  customSize,
  className = "",
  children,
  tabIndex,
}) => {
  const baseClasses = [
    getFontFamily(variant),
    getFontSize(size),
    getFontWeight(weight),
    className,
    "break-normal",
  ].join(" ");

  const variantConfig = getVariantStyle(variant);

  const style = customSize ? { fontSize: customSize } : variantConfig.style;

  const finalClass = `${baseClasses} ${variantConfig.className}`.trim();

  return (
    <div className={finalClass} style={style} tabIndex={tabIndex}>
      {children}
    </div>
  );
};

export default Typography;
