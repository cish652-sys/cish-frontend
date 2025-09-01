"use client";
import Image from "next/image";
import DateLabel from "../atoms/DateLabel";
import ButtonLink from "../atoms/ButtonLink";
import { Card, CardContent, CardFooter } from "../atoms/card";
import Typography from "../atoms/Typography";

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
        {showTitle && (
          <Typography variant="cardHeading" className="mb-2">
            {title}
          </Typography>
        )}
        <Typography variant="paragraphSmall">{description}</Typography>
      </CardContent>
      {showFooter && (
        <CardFooter className="flex justify-end">
          <ButtonLink label="Read More" />
        </CardFooter>
      )}
    </Card>
  );
}
