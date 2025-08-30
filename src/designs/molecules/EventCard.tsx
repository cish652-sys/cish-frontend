"use client";
import Image from "next/image";
import DateLabel from "../atoms/DateLabel";
import ButtonLink from "../atoms/ButtonLink";
import { Card, CardContent, CardFooter } from "../atoms/card";

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  showDate?: boolean;
  showFooter?: boolean;
  showTitle?: boolean;
};

export default function EventCard({
  image,
  date,
  title,
  description,
  showDate,
  showTitle,
  showFooter,
}: NewsCardProps) {
  return (
    <Card className="max-w-[349px] overflow-hidden flex flex-col shadow-md hover:shadow-lg transition">
      <Image src={image} alt={title} width={349.07} height={253.79} className="object-cover" />
      <CardContent className="p-2 flex flex-col">
        {showDate && <DateLabel date={date} />}
        {showTitle && <h3 className="text-md font-semibold text-green-800 mb-2">{title}</h3>}
        <p
          style={{
            fontWeight: 400,
            fontSize: "12px",
          }}
          className="text-muted-foreground"
        >
          {description}
        </p>
      </CardContent>
      {showFooter && (
        <CardFooter className="flex justify-end">
          <ButtonLink label="Read More" />
        </CardFooter>
      )}
    </Card>
  );
}
