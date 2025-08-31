// components/atoms/FruitCard.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/card";
import { FC } from "react";

interface FruitCardProps {
  icon: React.ReactNode;
  title: string;
}

const FruitCard: FC<FruitCardProps> = ({ title }) => {
  return (
    <Card className="p-4">
      <CardHeader className="flex justify-center"></CardHeader>
      <CardContent className="text-center mt-2">
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default FruitCard;
