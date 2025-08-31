"use client";
import Image from "next/image";
import iconEarth from "../public/images/SocialMedia/famicons_earth-outline.svg";

const socialMediaData = [
  {
    title: "X",
    images: ["", "", ""],
  },
  {
    title: "Facebook",
    images: [
      "",
      "",
      "",
    ],
  },
  {
    title: "Instagram",
    images: [
      "",
      "",
      "",
    ],
  },
  {
    title: "YouTube",
    images: [
      "/images/SocialMedia/yt1.png",
      "/images/SocialMedia/yt2.png",
      "/images/SocialMedia/yt3.png",
    ],
  },
];

export default function SocialMediaSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
      <div className="container flex items-center gap-2 mb-10">
        <Image src={iconEarth} alt="social" width={28} height={28} />
        <h2 className="text-green-900 font-bold text-lg md:text-xl uppercase">IN SOCIAL MEDIA</h2>
      </div>

      <div className="container flex flex-wrap justify-center lg:justify-between gap-8">
        {socialMediaData.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-[240px] max-w-[280px] bg-white shadow-md border flex flex-col p-4"
          >
            <h3 className="text-green-900 font-semibold text-center mb-4">{item.title}</h3>

            <div className="flex flex-col gap-4">
              {item.images.map((src, i) => (
                <div key={i} className="w-full border  overflow-hidden">
                  <Image
                    src={src}
                    alt={`${item.title} post ${i + 1}`}
                    width={217}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
