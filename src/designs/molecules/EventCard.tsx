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
};

export default function EventCard({ image, date, title, description }: NewsCardProps) {
  return (
    <Card className="max-w-[349px] h-[422] overflow-hidden flex flex-col shadow-md hover:shadow-lg transition">
      <Image
        src="/icons/Event 1.svg"
        alt={title}
        width={349.07}
        height={253.79}
        className="object-cover"
      />
      <CardContent className="p-2 flex flex-col">
        <DateLabel date={date} />
        <h3 className="text-md font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <ButtonLink label="Read More" />
      </CardFooter>
    </Card>
  );
}
