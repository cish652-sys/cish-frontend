import React from "react";

interface TitleProps {
  number: string;
  text: string;
}

const Title: React.FC<TitleProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <span className="text-3xl font-bold text-green-800">{number}</span>
      <span className="font-semibold text-green-900 text-sm">{text}</span>
    </div>
  );
};

export default Title;
