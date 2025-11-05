"use client";
import Image from "next/image";
import Link from "next/link";
import DateLabel from "../atoms/DateLabel";
import ButtonLink from "../atoms/ButtonLink";
import { Card, CardContent, CardFooter } from "../atoms/card";
import Typography from "../atoms/Typography";
import { useState } from "react";

type NewsCardProps = {
  id?: number | string;
  image: string;
  date: string;
  title: string;
  description: string;
  showDate?: boolean;
  showFooter?: boolean;
  showTitle?: boolean;
  titleResearch?: string;
};

export default function EventCard({
  id,
  image,
  date,
  title,
  description,
  showDate,
  showTitle,
  showFooter,
  titleResearch,
}: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  // Placeholder gray image as data URI
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='349' height='254'%3E%3Crect width='349' height='254' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";

  // Handle empty or invalid image sources
  const imageSrc =
    !imgError && image && typeof image === "string" && image.trim() !== ""
      ? image
      : placeholderImage;

  return (
    <Card className="max-w-[349px] px-2 py-2 overflow-hidden flex flex-col shadow-md hover:shadow-lg transition">
      <Image
        src={imageSrc}
        alt={title || "Event image"}
        width={349}
        height={254}
        className="object-cover"
        onError={() => setImgError(true)}
      />
      <CardContent className="p-4 flex flex-col">
        {showDate && <DateLabel date={date} />}
        {showTitle && (
          <Typography variant="cardHeading" className="mb-2">
            {title}
          </Typography>
        )}
        <Typography variant="paragraphSmall">{description}</Typography>
        {titleResearch && (
          <h1 className="text-[#1B5E20] flex align-center justify-evenly text-sm font-bold">
            {titleResearch}
          </h1>
        )}
      </CardContent>
      {showFooter && (
        <CardFooter className="flex justify-end">
          {id ? (
            <Link href={`/Events/${id}`}>
              <ButtonLink label="Read More" />
            </Link>
          ) : (
            <ButtonLink label="Read More" />
          )}
        </CardFooter>
      )}
    </Card>
  );
}
